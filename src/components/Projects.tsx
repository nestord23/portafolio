import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiWeb3Dotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  const getTechIcon = (tech: string, size: number = 14) => {
    const iconMap: Record<string, React.ReactElement> = {
      React: <FaReact color="#61DAFB" size={size} aria-hidden="true" />,
      JavaScript: <FaJs color="#F7DF1E" size={size} aria-hidden="true" />,
      TypeScript: <SiTypescript color="#3178C6" size={size} aria-hidden="true" />,
      CSS3: <FaCss3Alt color="#1572B6" size={size} aria-hidden="true" />,
      HTML5: <FaHtml5 color="#E34F26" size={size} aria-hidden="true" />,
      "Node.js": <FaNodeJs color="#339933" size={size} aria-hidden="true" />,
      MongoDB: <SiMongodb color="#47A248" size={size} aria-hidden="true" />,
      Firebase: <SiFirebase color="#FFCA28" size={size} aria-hidden="true" />,
      Blockchain: <SiBlockchaindotcom color="#F7931A" size={size} aria-hidden="true" />,
      Web3: <SiWeb3Dotjs color="#F16822" size={size} aria-hidden="true" />,
      NFT: <SiBlockchaindotcom color="#F7931A" size={size} aria-hidden="true" />,
      API: <FaJs color="#F7DF1E" size={size} aria-hidden="true" />,
      "Local Storage": <FaJs color="#F7DF1E" size={size} aria-hidden="true" />,
      Finance: <FaJs color="#F7DF1E" size={size} aria-hidden="true" />,
      CRUD: <FaJs color="#F7DF1E" size={size} aria-hidden="true" />,
      WordPress: <FaHtml5 color="#21759B" size={size} aria-hidden="true" />,
      Vite: <SiVite color="#646CFF" size={size} aria-hidden="true" />,
      Astro: <FaJs color="#FF5D01" size={size} aria-hidden="true" />,
      WebSockets: <FaNodeJs color="#339933" size={size} aria-hidden="true" />,
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" size={size} aria-hidden="true" />;
  };

  const projects = [
    {
      id: 1,
      title: "Hack Chat",
      description:
        "Chat en tiempo real con WebSockets, implementado en backend y frontend, para comunicación instantánea entre usuarios.",
      tech: ["React", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/nestord23/chat_FE",
      featured: true,
    },
    {
      id: 2,
      title: "book-picker",
      description:
        "Aplicación Web para almacenar Lecturas y Realizar Clasificación de lecturas y Elegir Próximas lecturas",
      tech: ["Astro", "JavaScript", "CSS3", "Node.js"],
      githubUrl: "https://github.com/nestord23/book-picker-fe",
      featured: true,
    },
    {
      id: 3,
      title: "Money Control",
      description:
        "Aplicación para gestión y control de presupuestos personales. Permite registrar ingresos, gastos y visualizar el balance financiero.",
      tech: ["React", "", "Finance"],
      githubUrl: "https://github.com/nestord23/MoneyControl_FE.git",
      featured: true,
    },
    {
      id: 4,
      title: "MintForge",
      description:
        "Herramienta automatizada para crear colecciones NFT y acuñar NFTs vinculados a ellas.",
      tech: ["Web3", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/nestord23/MintForge.git",
      featured: true,
    },
    {
      id: 5,
      title: "El Señor de la Merced",
      description:
        "Aplicación web moderna desarrollada con React. Proyecto que demuestra habilidades en desarrollo frontend con una interfaz intuitiva.",
      tech: ["React", "HTML5", "CSS3"],
      githubUrl: "https://github.com/nestord23/el-senor-de-la-merced",
      demoUrl: "https://elsenordelamerced.vercel.app/",
      featured: false,
    },
    {
      id: 6,
      title: "SixEyes Bot",
      description:
        "Bot de Discord para buscar información de NBA, videos de YouTube y más, desarrollado con TypeScript y discord.js.",
      tech: ["Node.js", "TypeScript", "API"],
      githubUrl: "https://github.com/nestord23/sixeyes-bot",
      featured: false,
    },
  ];

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes, enfocados en React, Blockchain y experiencias de usuario modernas."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                    staggerChildren: 0.07,
                    delayChildren: 0.15,
                    ease: "easeOut",
                  },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="glass-panel rounded-lg overflow-hidden group relative"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -8, y: -8, scale: 0.8 },
                  visible: {
                    opacity: 1, x: 0, y: 0, scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
                className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-lime-neon z-10"
              />
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 8, y: 8, scale: 0.8 },
                  visible: {
                    opacity: 1, x: 0, y: 0, scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" },
                  },
                }}
                className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-lime-neon z-10"
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
                className="relative h-44 bg-emerald-depth/30 flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(171, 214, 0, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(171, 214, 0, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-obsidian to-transparent z-10" />
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
                    visible: {
                      opacity: 0.3, scale: 1, rotate: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  whileHover={{
                    opacity: 0.6,
                    scale: 1.15,
                    rotate: [0, -8, 8, -4, 0],
                    transition: { duration: 0.4 },
                  }}
                  className="relative z-10 text-5xl"
                  style={{ cursor: "default" }}
                >
                  {getTechIcon(project.tech[0], 48)}
                </motion.div>
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 10 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="absolute top-3 right-3 z-20"
                  >
                    <span className="font-mono text-[10px] text-neon border border-lime-neon/30 px-2 py-0.5 tracking-wider bg-obsidian/80">
                      DESTACADO
                    </span>
                  </motion.div>
                )}
              </motion.div>

              <div className="p-5">
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className={`font-sora font-bold text-base mb-2 ${project.featured ? 'gradient-text' : 'text-white/90'}`}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className="text-slate/60 text-xs leading-relaxed mb-4 line-clamp-3"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className="flex flex-wrap gap-1.5 mb-4"
                >
                  {project.tech.map((t, tIndex) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.55 + tIndex * 0.05 }}
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-lime-neon/80 border border-lime-neon/20 bg-lime-neon/5 px-2 py-0.5"
                    >
                      {getTechIcon(t)}
                      {t}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1, y: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                  }}
                  className="flex gap-2"
                >
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-1.5 font-mono text-xs text-obsidian bg-lime-neon px-3 py-1.5 hover:bg-lime-neon/90 transition-colors"
                    >
                      <FaExternalLinkAlt size={10} aria-hidden="true" /> Demo
                    </motion.a>
                  )}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-1.5 font-mono text-xs text-neon border border-lime-neon/30 px-3 py-1.5 hover:bg-lime-neon/10 hover:border-lime-neon/50 transition-colors"
                  >
                      <FaGithub size={12} aria-hidden="true" /> Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
