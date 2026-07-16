import { useEffect, useRef, type RefObject } from "react";
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  BufferGeometry,
  BufferAttribute,
  Points,
  AdditiveBlending,
  Clock,
} from "three";

interface TimelineCanvasProps {
  containerRef: RefObject<HTMLElement | null>;
  nodeSelector?: string;
  particlesPerNode?: number;
  className?: string;
}

// ──────────────────────────────────────────────
// Horizontal wave line shader (always visible)
// ──────────────────────────────────────────────

const lineVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const lineFragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uStart;
  uniform float uEnd;
  uniform float uHover;

  void main() {
    float x = vUv.x;
    float y = vUv.y;

    float fadeStart = smoothstep(uStart - 0.03, uStart, x);
    float fadeEnd   = smoothstep(uEnd + 0.03, uEnd, x);
    float inside    = fadeStart * fadeEnd;

    float freq = 18.0;
    float speed = 0.8;
    float amp = 0.06;
    float wave = sin(x * freq - uTime * speed) * amp;

    float yDist = y - 0.5 - wave;

    float core = smoothstep(0.02, 0.0, abs(yDist));
    float halo = smoothstep(0.1, 0.0, abs(yDist));

    float flow = sin(x * 36.0 - uTime * 3.0);
    float pulse = smoothstep(0.7, 1.0, flow) * halo;

    vec3 softGreen   = vec3(0.15, 0.7, 0.25);
    vec3 brightGreen = vec3(0.05, 0.95, 0.15);
    vec3 col = mix(softGreen, brightGreen, uHover);

    float alpha = inside * (core * 0.75 + halo * 0.12 + pulse * 0.2);

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// ──────────────────────────────────────────────
// Particle wave follower + ripple shader
// ──────────────────────────────────────────────

const particleVertexShader = `
  attribute vec2 aOrigin;
  attribute float aAngle;
  attribute float aSpeed;
  attribute float aSize;
  attribute float aUnlock;

  uniform float uTime;

  varying float vAlpha;

  void main() {
    float freq = 18.0;
    float speed = 0.8;
    float amp = 0.06;

    float xUv = aOrigin.x * 0.5 + 0.5;
    float waveUv = sin(xUv * freq - uTime * speed) * amp;
    float waveNdc = waveUv * 2.0;
    float yOff = (aSpeed - 0.09) * 0.8;

    float t = uTime - aUnlock;
    float isActive = step(0.0, aUnlock) * step(0.0, t) * step(t, 1.0);
    float p = clamp(t / 1.0, 0.0, 1.0);
    float eased = 1.0 - pow(1.0 - p, 3.0);

    vec2 ripple = vec2(cos(aAngle), sin(aAngle)) * eased * aSpeed * 1.2;
    vec2 basePos = vec2(aOrigin.x, waveNdc + yOff);
    vec2 finalPos = mix(basePos, basePos + ripple, isActive);

    vAlpha = (1.0 - eased * isActive) * 0.7;

    gl_Position = vec4(finalPos, 0.0, 1.0);
    gl_PointSize = aSize * (1.0 - eased * isActive * 0.5);
  }
`;

const particleFragmentShader = `
  uniform float uHover;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;

    float glow = smoothstep(0.5, 0.0, d);
    vec3 softGreen   = vec3(0.15, 0.7, 0.25);
    vec3 brightGreen = vec3(0.05, 0.95, 0.15);
    vec3 col = mix(softGreen, brightGreen, uHover);
    gl_FragColor = vec4(col, glow * vAlpha);
  }
`;

// ──────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────

const TimelineCanvas = ({
  containerRef,
  nodeSelector = "[data-timeline-node]",
  particlesPerNode = 24,
  className = "",
}: TimelineCanvasProps) => {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const wrap = canvasWrapRef.current;
    const container = containerRef.current;
    if (!wrap || !container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    // ── Line mesh ──
    const lineMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uStart: { value: 0 },
        uEnd: { value: 1 },
        uHover: { value: 0 },
      },
      vertexShader: lineVertexShader,
      fragmentShader: lineFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    const lineMesh = new Mesh(new PlaneGeometry(2, 2), lineMaterial);
    scene.add(lineMesh);

    // ── Particles ──
    let nodeEls: HTMLElement[] = [];
    let nodeFractions: number[] = [];
    let nodeUnlocked: boolean[] = [];

    let particleGeometry = new BufferGeometry();
    const particleMaterial = new ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHover: { value: 0 },
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    let particles = new Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const buildParticles = () => {
      nodeEls = Array.from(container.querySelectorAll<HTMLElement>(nodeSelector));
      nodeUnlocked = nodeEls.map(() => false);

      const count = Math.max(nodeEls.length * particlesPerNode, 1);
      const origin = new Float32Array(count * 2);
      const angle = new Float32Array(count);
      const speed = new Float32Array(count);
      const size = new Float32Array(count);
      const unlock = new Float32Array(count).fill(-1);
      const position = new Float32Array(count * 3);

      for (let n = 0; n < nodeEls.length; n++) {
        for (let p = 0; p < particlesPerNode; p++) {
          const i = n * particlesPerNode + p;
          angle[i] = Math.random() * Math.PI * 2;
          speed[i] = 0.04 + Math.random() * 0.12;
          size[i] = 3 + Math.random() * 5;
        }
      }

      particleGeometry.dispose();
      particleGeometry = new BufferGeometry();
      particleGeometry.setAttribute("aOrigin", new BufferAttribute(origin, 2));
      particleGeometry.setAttribute("aAngle", new BufferAttribute(angle, 1));
      particleGeometry.setAttribute("aSpeed", new BufferAttribute(speed, 1));
      particleGeometry.setAttribute("aSize", new BufferAttribute(size, 1));
      particleGeometry.setAttribute("aUnlock", new BufferAttribute(unlock, 1));
      particleGeometry.setAttribute("position", new BufferAttribute(position, 3));

      scene.remove(particles);
      particles = new Points(particleGeometry, particleMaterial);
      scene.add(particles);
    };

    const measureNodes = () => {
      const containerRect = container.getBoundingClientRect();
      nodeFractions = nodeEls.map((el) => {
        const rect = el.getBoundingClientRect();
        const fx = (rect.left + rect.width / 2 - containerRect.left) / containerRect.width;
        return Math.max(0, Math.min(1, fx));
      });

      // Line boundaries from card edges (not node centers)
      const rightEdge = container.querySelector<HTMLElement>('[data-boundary="right"]');
      const leftEdge = container.querySelector<HTMLElement>('[data-boundary="left"]');
      if (rightEdge && leftEdge) {
        const rightRect = rightEdge.getBoundingClientRect();
        const leftRect = leftEdge.getBoundingClientRect();
        lineMaterial.uniforms.uStart.value = Math.max(0, Math.min(1,
          (rightRect.right - containerRect.left) / containerRect.width
        ));
        lineMaterial.uniforms.uEnd.value = Math.max(0, Math.min(1,
          (leftRect.left - containerRect.left) / containerRect.width
        ));
      }

      const originAttr = particleGeometry.getAttribute("aOrigin") as BufferAttribute;
      if (originAttr) {
        nodeFractions.forEach((fx, n) => {
          for (let p = 0; p < particlesPerNode; p++) {
            const i = n * particlesPerNode + p;
            const xNdc = fx * 2 - 1;
            originAttr.setXY(i, xNdc + (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.02);
          }
        });
        originAttr.needsUpdate = true;
      }
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      buildParticles();
      measureNodes();
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    // ── Hover events on container (so canvas can stay pointer-events: none) ──
    const onEnter = () => { hoveredRef.current = true; };
    const onLeave = () => { hoveredRef.current = false; };
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    // ── Clock & unlock timers so particles burst staggered ──
    const clock = new Clock();
    let frameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      lineMaterial.uniforms.uTime.value = elapsed;
      lineMaterial.uniforms.uHover.value = hoveredRef.current ? 1 : 0;
      particleMaterial.uniforms.uTime.value = elapsed;
      particleMaterial.uniforms.uHover.value = hoveredRef.current ? 1 : 0;

      // Staggered unlock — fire each node after a short delay
      const unlockAttr = particleGeometry.getAttribute("aUnlock") as BufferAttribute | undefined;
      if (unlockAttr) {
        let changed = false;
        nodeFractions.forEach((_fx, n) => {
          if (!nodeUnlocked[n]) {
            nodeUnlocked[n] = true;
            const delay = n * 0.25;
            for (let p = 0; p < particlesPerNode; p++) {
              unlockAttr.setX(n * particlesPerNode + p, elapsed + delay);
            }
            changed = true;
          }
        });
        if (changed) unlockAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      lineMesh.geometry.dispose();
      lineMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === wrap) {
        wrap.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={canvasWrapRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};

export default TimelineCanvas;
