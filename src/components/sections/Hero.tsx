import { m, useReducedMotion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeInUp, scaleIn } from "../../lib/animations";
import GridBackground from "../effects/GridBackground";

const TECH_STACK: string[] = ["React", "JavaScript", "TypeScript"];

const TYPEWRITER_STRINGS: string[] = [
  "> Desarrollador Web",
  "> React · TypeScript",
  "> Estudiante de Ingeniería en Sistemas",
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <m.div
          className="flex-shrink-0"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <div className="w-48 h-48 lg:w-56 lg:h-56 overflow-hidden scan-reveal">
            <img
              src={`${import.meta.env.BASE_URL}fotoPerfil.webp`}
              alt="Néstor Montenegro"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </m.div>

        <m.div
          className="flex-1 text-center lg:text-left"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
            <span className="w-2 h-2 rounded-full bg-lime-neon animate-pulse" />
            <span className="font-mono text-xs text-lime-neon tracking-wider">
              SISTEMA OPERATIVO — DISPONIBLE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold mb-4">
            <span className="gradient-text">Néstor Montenegro</span>
          </h1>

          <h2 className="text-lg md:text-xl font-mono text-slate mb-6 h-8">
            {prefersReducedMotion ? (
              TYPEWRITER_STRINGS[0]
            ) : (
              <Typewriter
                options={{
                  strings: TYPEWRITER_STRINGS,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                  cursor: "_",
                }}
              />
            )}
          </h2>

          <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            {TECH_STACK.map((tech) => (
              <span key={tech} className="terminal-tag">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-slate/80 max-w-xl leading-relaxed font-sora text-sm md:text-base">
            Construyo aplicaciones web con tecnologías modernas. Me enfoco en
            crear interfaces responsivas, consumir APIs REST y desarrollar
            componentes reutilizables. Estudiante de Ingeniería en Sistemas con
            experiencia en metodologías ágiles y trabajo en equipo.
          </p>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;