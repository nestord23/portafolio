import { motion } from 'framer-motion';
import { Globe, Github, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Responsivo",
      description: "Tienda online moderna con carrito de compras, sistema de pagos y panel administrativo.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      icon: <Globe size={40} />
    },
    {
      id: 2,
      title: "App de Gestión de Tareas",
      description: "Aplicación para gestión de proyectos con funcionalidades de colaboración en tiempo real.",
      tech: ["React", "Firebase", "Material-UI", "PWA"],
      icon: <Smartphone size={40} />
    },
    {
      id: 3,
      title: "Landing Page Corporativa",
      description: "Sitio web corporativo con diseño moderno, optimizado para SEO y conversiones.",
      tech: ["HTML5", "CSS3", "JavaScript", "WordPress"],
      icon: <Globe size={40} />
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Panel de control con visualizaciones de datos interactivas y reportes en tiempo real.",
      tech: ["React", "D3.js", "Chart.js", "API REST"],
      icon: <Github size={40} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-light)' }}>
            Algunos de mis trabajos más destacados
          </p>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="project-card card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ flex: 1, fontSize: '0.9rem' }}>
                    Ver Demo
                  </button>
                  <button style={{ flex: 1, fontSize: '0.9rem', background: 'var(--accent-beige)' }}>
                    Código
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;