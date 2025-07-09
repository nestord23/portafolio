import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaHtml5, 
  FaNodeJs,
  FaChevronLeft, 
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub 
} from 'react-icons/fa';
import { 
  SiBlockchaindotcom, 
  SiWeb3Dotjs, 
  SiMongodb,
  SiFirebase,
  SiTypescript 
} from 'react-icons/si';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const getTechIcon = (tech: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      'React': <FaReact color="#61DAFB" />,
      'JavaScript': <FaJs color="#F7DF1E" />,
      'TypeScript': <SiTypescript color="#3178C6" />,
      'CSS3': <FaCss3Alt color="#1572B6" />,
      'HTML5': <FaHtml5 color="#E34F26" />,
      'Node.js': <FaNodeJs color="#339933" />,
      'MongoDB': <SiMongodb color="#47A248" />,
      'Firebase': <SiFirebase color="#FFCA28" />,
      'Blockchain': <SiBlockchaindotcom color="#F7931A" />,
      'Web3': <SiWeb3Dotjs color="#F16822" />,
      'NFT': <SiBlockchaindotcom color="#F7931A" />,
      'API': <FaJs color="#F7DF1E" />,
      'Cryptocurrency': <SiBlockchaindotcom color="#F7931A" />,
      'Local Storage': <FaJs color="#F7DF1E" />,
      'Finance': <FaJs color="#F7DF1E" />,
      'CRUD': <FaJs color="#F7DF1E" />,
      'WordPress': <FaHtml5 color="#21759B" />
    };
    return iconMap[tech] || <FaJs color="#F7DF1E" />;
  };

  const projects = [
    {
      id: 1,
      title: "Colección de NFTs",
      description: "Una innovadora colección de tokens no fungibles (NFTs) con diseños únicos y exclusivos. Proyecto desarrollado con tecnologías modernas de blockchain para crear experiencias digitales únicas.",
      tech: ["React", "JavaScript", "Blockchain", "Web3", "NFT"],
      githubUrl: "https://github.com/nestord23/new_nfts",
      image: "/proyecto-nft.jpg" // Placeholder, puedes agregar imagen real
    },
    {
      id: 2,
      title: "Cotización de Criptomonedas",
      description: "Aplicación web para consultar cotizaciones en tiempo real de criptomonedas. Interfaz moderna y responsiva que consume APIs para mostrar datos actualizados del mercado crypto.",
      tech: ["React", "JavaScript", "API", "CSS3", "Cryptocurrency"],
      githubUrl: "https://github.com/nestord23/Cotizacion-Criptos-React",
      image: "/proyecto-crypto.jpg"
    },
    {
      id: 3,
      title: "Control de Presupuesto",
      description: "Aplicación para gestión y control de presupuestos personales. Permite registrar ingresos, gastos y visualizar el balance financiero con gráficos interactivos y reportes detallados.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "Finance"],
      githubUrl: "https://github.com/nestord23/proyecto-presupuesto",
      image: "/proyecto-budget.jpg"
    },
    {
      id: 4,
      title: "Administrador de Clientes",
      description: "Sistema de gestión de clientes con funcionalidades CRUD completas. Permite agregar, editar, eliminar y buscar clientes de manera eficiente con una interfaz intuitiva y moderna.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "CRUD"],
      githubUrl: "https://github.com/nestord23/Administrador-de-Clientes-React",
      image: "/proyecto-clientes.jpg"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Proyectos</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Mis proyectos destacados en React: blockchain, finanzas, criptomonedas y gestión de datos
          </p>
        </motion.div>

        <div className="project-carousel">
          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                className="project-slide"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-image-container">
                  <div className="project-image-placeholder">
                    <div className="project-icon">
                      {getTechIcon(currentProjectData.tech[0])}
                    </div>
                    <div className="project-preview-text">
                      {currentProjectData.title}
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{currentProjectData.title}</h3>
                  <p className="project-description">{currentProjectData.description}</p>
                  
                  <div className="project-tech">
                    <h4>Tecnologías:</h4>
                    <div className="tech-list">
                      {currentProjectData.tech.map((tech, index) => (
                        <div key={index} className="tech-item">
                          <span className="tech-icon">{getTechIcon(tech)}</span>
                          <span className="tech-name">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-buttons">
                    <a 
                      href={currentProjectData.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                    <a 
                      href={currentProjectData.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn code-btn"
                    >
                      <FaGithub />
                      Código
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevProject}
              aria-label="Proyecto anterior"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="carousel-btn next-btn" 
              onClick={nextProject}
              aria-label="Siguiente proyecto"
            >
              <FaChevronRight />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;