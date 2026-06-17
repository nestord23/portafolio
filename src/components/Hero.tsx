import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(171, 214, 0, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171, 214, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "grid-drift 20s linear infinite",
        }}
      />
      <style>{`
        @keyframes grid-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-40px, -40px); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="w-48 h-48 lg:w-56 lg:h-56 overflow-hidden scan-reveal">
              <img
                src={`${import.meta.env.BASE_URL}fotoPerfil.webp`}
                alt="Néstor Montenegro"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
            <Typewriter
              options={{
                strings: [
                  "> Desarrollador Frontend",
                  "> React Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                cursor: "_",
              }}
            />
          </h2>

          <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
            {["React", "TypeScript", "UX/UI"].map((tech) => (
              <span key={tech} className="terminal-tag">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-slate/80 max-w-xl leading-relaxed font-sora text-sm md:text-base">
            Especializado en crear experiencias digitales limpias, funcionales y
            centradas en el usuario. Transformo ideas en interfaces modernas y
            accesibles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
