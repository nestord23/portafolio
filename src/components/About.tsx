import { motion } from 'framer-motion';
import { Code, Palette, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={24} />, name: 'React' },
    { icon: <Globe size={24} />, name: 'HTML5' },
    { icon: <Palette size={24} />, name: 'CSS3' },
    { icon: <Code size={24} />, name: 'JavaScript' },
    { icon: <Globe size={24} />, name: 'WordPress' },
    { icon: <Palette size={24} />, name: 'UX/UI' },
    { icon: <Smartphone size={24} />, name: 'Responsive' },
    { icon: <Code size={24} />, name: 'TypeScript' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="gradient-text">Sobre mí</h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="about-text">
              Diseñador web con formación en Diseño Gráfico y Desarrollo Frontend, 
              especializado en la creación de contenido digital creativo, administración 
              de redes sociales y desarrollo de sitios en WordPress. Proactivo, con 
              excelente ortografía y redacción.
            </p>
            
            <p className="about-text">
              Me apasiona crear interfaces intuitivas y experiencias de usuario 
              excepcionales, combinando conocimientos técnicos con sensibilidad 
              estética para desarrollar soluciones web innovadoras.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="skills-grid"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="skill-item"
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>
                  {skill.icon}
                </div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;