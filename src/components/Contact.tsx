import { motion } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={18} />,
      label: "Teléfono",
      value: "+502 57886144",
      link: "tel:+50257886144",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "realdanii135@gmail.com",
      link: "mailto:realdanii135@gmail.com",
    },
    {
      icon: <MapPin size={18} />,
      label: "Ubicación",
      value: "Guatemala",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nestor-montenegro",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/nestord23",
    },
  ];

  const services = [
    "Desarrollo Frontend (React, HTML5, CSS3)",
    "Diseño UX/UI",
    "Desarrollo WordPress",
    "Diseño Responsivo",
  ];

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold gradient-text mb-3">
            ¡Trabajemos juntos!
          </h2>
          <p className="font-mono text-sm text-slate/60">
            Estoy disponible para nuevos proyectos y oportunidades
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="glass-panel rounded-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm text-white/60 tracking-wider uppercase mb-6">
              Información de contacto
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lime-neon/60 w-5">{item.icon}</span>
                  <div>
                    <div className="font-mono text-[10px] text-slate/50 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-slate/80 text-sm hover:text-lime-neon transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate/80 text-sm">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="font-mono text-xs text-slate/50 tracking-wider uppercase mb-3">
              Sígueme en redes
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate/50 hover:text-lime-neon transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-panel rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm text-white/60 tracking-wider uppercase mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-slate/60 text-sm leading-relaxed mb-6">
              Me especializo en crear experiencias digitales excepcionales.
              Desde sitios web corporativos hasta aplicaciones interactivas,
              estoy aquí para convertir tus ideas en realidad.
            </p>

            <h4 className="font-mono text-xs text-slate/50 tracking-wider uppercase mb-3">
              Servicios que ofrezco:
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="font-mono text-xs text-slate/60 flex items-center gap-2">
                  <span className="text-lime-neon">&gt;</span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
