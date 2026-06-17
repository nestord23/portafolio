import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;

  uniform float uTime;
  uniform vec2 uMouse;

  varying float vAlpha;

  void main() {
    vec3 pos = position;

    float t = uTime * aSpeed;
    pos.x += sin(t * 0.8 + aPhase) * 0.6 + sin(t * 0.3 + aPhase * 2.0) * 0.3;
    pos.y += sin(t * 0.5 + aPhase * 1.3) * 0.8 + sin(t * 0.2 + aPhase * 0.7) * 0.4;
    pos.z += sin(t * 0.4 + aPhase * 0.9) * 0.4;

    pos.x += uMouse.x * (0.3 + pos.z * 0.15);
    pos.y += uMouse.y * (0.3 + pos.z * 0.15);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    float scale = 300.0 / -mvPosition.z;
    gl_PointSize = aSize * scale;
    gl_Position = projectionMatrix * mvPosition;

    float pulse = 0.5 + 0.5 * sin(uTime * 0.6 + aPhase);
    vAlpha = 0.3 + 0.7 * pulse;
  }
`;

const fragmentShader = `
  varying float vAlpha;

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    if (dist > 0.5) discard;

    float glow = smoothstep(0.5, 0.0, dist);
    float core = smoothstep(0.25, 0.0, dist);

    vec3 color = vec3(0.01, 0.35, 0.03);
    color += vec3(0.03, 0.7, 0.05) * glow;
    color += vec3(0.01, 0.9, 0.02) * core * 0.5;

    float alpha = glow * vAlpha * 0.45;
    gl_FragColor = vec4(color, alpha);
  }
`;

const getParticleCount = () => {
  const w = window.innerWidth;
  if (w < 640) return 120;
  if (w < 1024) return 200;
  return 300;
};

const ShaderBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const count = getParticleCount();

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      sizes[i] = Math.random() * 0.2 + 0.05;
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = Math.random() * 0.6 + 0.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
    geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const targetMouse = { x: 0, y: 0 };
    const currentMouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / width) * 2 - 1;
      targetMouse.y = -(e.clientY / height) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouse.x = (e.touches[0].clientX / width) * 2 - 1;
        targetMouse.y = -(e.touches[0].clientY / height) * 2 + 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let running = true;
    const timer = new THREE.Timer();

    const animate = () => {
      if (!running) return;
      timer.update();
      const elapsed = timer.getElapsed();

      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      material.uniforms.uTime.value = elapsed;
      material.uniforms.uMouse.value.copy(currentMouse);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      running = false;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ShaderBackground;
