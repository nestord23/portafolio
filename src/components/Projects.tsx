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
  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      React: <FaReact color="#61DAFB" size={14} aria-hidden="true" />,
      JavaScript: <FaJs color="#F7DF1E" size={14} aria-hidden="true" />,
      TypeScript: <SiTypescript color="#3178C6" size={14} aria-hidden="true" />,
      CSS3: <FaCss3Alt color="#1572B6" size={14} aria-hidden="true" />,
      HTML5: <FaHtml5 color="#E34F26" size={14} aria-hidden="true" />,
      "Node.js": <FaNodeJs color="#339933" size={14} aria-hidden="true" />,
      MongoDB: <SiMongodb color="#47A248" size={14} aria-hidden="true" />,
      Firebase: <SiFirebase color="#FFCA28" size={14} aria-hidden="true" />,
      Blockchain: <SiBlockchaindotcom color="#F7931A" size={14} aria-hidden="true" />,
      Web3: <SiWeb3Dotjs color="#F16822" size={14} aria-hidden="true" />,
      NFT: <SiBlockchaindotcom color="#F7931A" size={14} aria-hidden="true" />,
      API: <FaJs color="#F7DF1E" size={14} aria-hidden="true" />,
      "Local Storage": <FaJs color="#F7DF1E" size={14} aria-hidden="true" />,
      Finance: <FaJs color="#F7DF1E" size={14} aria-hidden="true" />,
      CRUD: <FaJs color="#F7DF1E" size={14} aria-hidden="true" />,
      WordPress: <FaHtml5 color="#21759B" size={14} aria-hidden="true" />,
      Vite: <SiVite color="#646CFF" size={14} aria-hidden="true" />,
      Astro: <FaJs color="#FF5D01" size={14} aria-hidden="true" />,
      WebSockets: <FaNodeJs color="#339933" size={14} aria-hidden="true" />,
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" size={14} aria-hidden="true" />;
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
      title: "Administrador de Clientes",
      description:
        "Sistema de gestión de clientes con funcionalidades CRUD completas. Permite agregar, editar, eliminar y buscar clientes de manera eficiente.",
      tech: ["React", "CRUD", "Local Storage"],
      githubUrl: "https://github.com/nestord23/Administrador-de-Clientes-React",
      featured: false,
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
              className="glass-panel rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 bg-emerald-depth/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(171, 214, 0, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(171, 214, 0, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10 text-5xl opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                  {getTechIcon(project.tech[0])}
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="font-mono text-[10px] text-neon border border-lime-neon/30 px-2 py-0.5 tracking-wider bg-obsidian/80">
                      DESTACADO
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-white/90 font-sora font-bold text-base mb-2">
                  {project.title}
                </h3>
                <p className="text-slate/60 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 font-mono text-[10px] text-slate/70 border border-white/5 px-2 py-0.5">
                      {getTechIcon(t)}
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-obsidian bg-lime-neon px-3 py-1.5 hover:bg-lime-neon/90 transition-colors"
                    >
                      <FaExternalLinkAlt size={10} aria-hidden="true" /> Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-neon border border-lime-neon/30 px-3 py-1.5 hover:bg-lime-neon/10 transition-colors"
                  >
                      <FaGithub size={12} aria-hidden="true" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
