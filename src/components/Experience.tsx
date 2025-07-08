import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "Cz-Labs",
      period: "feb 2025 – jun 2025",
      duties: [
        "Creación de contenido gráfico para redes sociales y campañas publicitarias",
        "Diseño y desarrollo de sitios web en WordPress",
        "Organización de eventos para marcas locales",
        "Gestión de comunidades en redes sociales"
      ]
    },
    {
      title: "Cobrador Investigador",
      company: "Recaudadora y Calificadora de Créditos",
      period: "sep 2019 – feb 2025",
      duties: [
        "Análisis de bases de datos y generación de reportes",
        "Uso de herramientas digitales para sistematización de información",
        "Gestión de carteras de clientes y seguimiento de procesos",
        "Implementación de mejoras en procesos administrativos"
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experiencia" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Experiencia</h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-content card">
                <div className="job-title">{exp.title}</div>
                <div className="company-name">{exp.company}</div>
                <div className="job-period">{exp.period}</div>
                <ul className="job-duties">
                  {exp.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <h3>Certificaciones y Educación</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem', 
            marginTop: '2rem' 
          }}>
            <div className="card">
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                Diseño Gráfico
              </h4>
              <p>Formación en diseño visual y comunicación gráfica</p>
            </div>
            <div className="card">
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                Desarrollo Frontend
              </h4>
              <p>Especialización en tecnologías web modernas</p>
            </div>
            <div className="card">
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>
                UX/UI Design
              </h4>
              <p>Certificación en experiencia de usuario</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;