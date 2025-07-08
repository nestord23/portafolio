import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Teléfono",
      value: "+502 57886144",
      link: "tel:+50257886144"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "realdanii135@gmail.com",
      link: "mailto:realdanii135@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      label: "Ubicación",
      value: "Guatemala",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nestor-montenegro"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/nestord23"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¡Trabajemos juntos!</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>
            Estoy disponible para nuevos proyectos y oportunidades
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{ marginBottom: '2rem', color: 'var(--text-dark)' }}>
              Información de contacto
            </h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="contact-item"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="contact-icon">
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    {item.label}
                  </div>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      style={{ color: 'var(--text-dark)', textDecoration: 'none' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text-dark)' }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            <div style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>
                Sígueme en redes
              </h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
              ¿Tienes un proyecto en mente?
            </h3>
            <p style={{ color: 'var(--text-dark)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Me especializo en crear experiencias digitales excepcionales. 
              Desde sitios web corporativos hasta aplicaciones interactivas, 
              estoy aquí para convertir tus ideas en realidad.
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Servicios que ofrezco:
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                color: 'var(--text-dark)' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  ✨ Desarrollo Frontend (React, HTML5, CSS3)
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  🎨 Diseño UX/UI
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  🌐 Desarrollo WordPress
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  📱 Diseño Responsivo
                </li>
              </ul>
            </div>

            <motion.a
              href="mailto:realdanii135@gmail.com"
              style={{
                display: 'inline-block',
                background: 'var(--primary-white)',
                color: 'var(--text-dark)',
                padding: '15px 30px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontWeight: '600',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar mensaje
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;