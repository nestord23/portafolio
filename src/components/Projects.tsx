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

const Projects = () => {
  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      React: <FaReact color="#61DAFB" />,
      JavaScript: <FaJs color="#F7DF1E" />,
      TypeScript: <SiTypescript color="#3178C6" />,
      CSS3: <FaCss3Alt color="#1572B6" />,
      HTML5: <FaHtml5 color="#E34F26" />,
      "Node.js": <FaNodeJs color="#339933" />,
      MongoDB: <SiMongodb color="#47A248" />,
      Firebase: <SiFirebase color="#FFCA28" />,
      Blockchain: <SiBlockchaindotcom color="#F7931A" />,
      Web3: <SiWeb3Dotjs color="#F16822" />,
      NFT: <SiBlockchaindotcom color="#F7931A" />,
      API: <FaJs color="#F7DF1E" />,
      Cryptocurrency: <SiBlockchaindotcom color="#F7931A" />,
      "Local Storage": <FaJs color="#F7DF1E" />,
      Finance: <FaJs color="#F7DF1E" />,
      CRUD: <FaJs color="#F7DF1E" />,
      WordPress: <FaHtml5 color="#21759B" />,
      Vite: <SiVite color="#646CFF" />,
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" />;
  };

  const projects = [
    {
      id: 1,
      title: "Hack Chat",
      description:
        "Chat en tiempo real con WebSockets, implementado en backend y frontend, para comunicación instantánea entre usuarios.",
      tech: ["React", "WebSockets", "Node.js"],
      githubUrl: "https://github.com/nestord23/chat_FE",
      image: "/proyecto-nft.jpg",
      featured: false,
    },
    {
      id: 2,
      title: "book-picker",
      description:
        "Aplicacion Web para almacenar Lecturas y Realizar Clasificacion de lecturas y Eligir Proximas lecturas",
      tech: ["Astro", "Javascript", "CSS3", "Node.js"],
      githubUrl: "https://github.com/nestord23/book-picker-fe",
      image: "/proyecto-crypto.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Control de Presupuesto",
      description:
        "Aplicación para gestión y control de presupuestos personales. Permite registrar ingresos, gastos y visualizar el balance financiero.",
      tech: ["React", "Local Storage", "Finance"],
      githubUrl: "https://github.com/nestord23/proyecto-presupuesto",
      image: "/proyecto-budget.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Administrador de Clientes",
      description:
        "Sistema de gestión de clientes con funcionalidades CRUD completas. Permite agregar, editar, eliminar y buscar clientes de manera eficiente.",
      tech: ["React", "CRUD", "Local Storage"],
      githubUrl: "https://github.com/nestord23/Administrador-de-Clientes-React",
      image: "/proyecto-clientes.jpg",
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
      image: "/proyecto-merced.jpg",
      featured: true,
    },
    {
      id: 6,
      title: "Simsoms",
      description:
        "Aplicación web moderna desarrollada con React y TypeScript usando Vite. Proyecto que demuestra habilidades en desarrollo frontend con TypeScript.",
      tech: ["React", "TypeScript", "Vite"],
      githubUrl: "https://github.com/nestord23/simsoms",
      demoUrl: "https://simsoms-green.vercel.app",
      image: "/proyecto-simsoms.jpg",
      featured: true,
    },
  ];

  return (
    <section
      id="proyectos"
      className="projects section"
      style={{ position: "relative" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: "4rem", textAlign: "center" }}
        >
          <h2
            className="gradient-text"
            style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
          >
            Proyectos Destacados
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "var(--primary-purple)",
              margin: "0 auto",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              maxWidth: "600px",
              margin: "1.5rem auto 0",
              color: "var(--text-light-secondary)",
              fontSize: "1.1rem",
            }}
          >
            Una selección de mis trabajos más recientes, enfocados en React,
            Blockchain y experiencias de usuario modernas.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: "rgba(30, 30, 63, 0.6)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(139, 92, 246, 0.15)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
              }}
            >
              {/* Project Header/Image Area */}
              <div
                style={{
                  height: "200px",
                  background:
                    "linear-gradient(135deg, var(--primary-purple-dark), var(--bg-dark))",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent)",
                    zIndex: 1,
                  }}
                />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    zIndex: 2,
                    fontSize: "4rem",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
                  }}
                >
                  {getTechIcon(project.tech[0])}
                </motion.div>

                {project.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(139, 92, 246, 0.9)",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      zIndex: 3,
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "0.75rem",
                    color: "var(--text-light)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-light-secondary)",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "15px",
                        background: "rgba(139, 92, 246, 0.1)",
                        color: "var(--primary-purple-light)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "auto" }}
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.8rem",
                        borderRadius: "10px",
                        background: "var(--primary-purple)",
                        color: "white",
                        fontWeight: "500",
                        fontSize: "0.9rem",
                        transition: "all 0.2s",
                      }}
                    >
                      <FaExternalLinkAlt size={14} /> Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.8rem",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)",
                      color: "var(--text-light)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontWeight: "500",
                      fontSize: "0.9rem",
                      transition: "all 0.2s",
                    }}
                  >
                    <FaGithub size={16} /> Code
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
