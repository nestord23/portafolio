import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "Cz-Labs",
      period: "feb 2025 — jun 2025",
      duties: [
        "Participé activamente en el desarrollo de una plataforma de staking, diseñando y optimizando scripts para la creación masiva de más de 1,000 NFTs de prueba.",
        "Adquirí experiencia práctica en la implementación y desarrollo de smart contracts utilizando Rust, fortaleciendo mis habilidades en programación segura y eficiente para blockchain.",
        "Apasionado por innovar y seguir aprendiendo tecnologías descentralizadas.",
      ],
    },
    {
      title: "Cobrador Investigador",
      company: "Recaudadora y Calificadora de Créditos",
      period: "sep 2019 — feb 2025",
      duties: [
        "Análisis de bases de datos y generación de reportes",
        "Uso de herramientas digitales para sistematización de información",
        "Gestión de carteras de clientes y seguimiento de procesos",
        "Implementación de mejoras en procesos administrativos",
      ],
    },
  ];

  const certifications = [
    { title: "Diseño Gráfico", desc: "Formación en diseño visual y comunicación gráfica" },
    { title: "Desarrollo Frontend", desc: "Especialización en tecnologías web modernas" },
    { title: "UX/UI Design", desc: "Certificación en experiencia de usuario" },
  ];

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold gradient-text">
            Experiencia
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mb-20">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-lime-neon/20 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                <div className="glass-panel rounded-lg p-6">
                  <span className="font-mono text-[10px] text-lime-neon/60 tracking-wider uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-white/90 font-sora font-bold text-lg mt-1">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs text-lime-neon/80 mt-0.5 mb-3">
                    {exp.company}
                  </p>
                  <ul className={`space-y-1.5 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.duties.map((duty, i) => (
                      <li key={i} className="text-slate/60 text-xs leading-relaxed">
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-lime-neon border-4 border-obsidian -translate-x-1/2 mt-6 md:mt-8 z-10" />

              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center font-mono text-sm text-white/60 tracking-wider uppercase mb-8">
            Certificaciones y Educación
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.title} className="glow-border p-5 pt-6 pb-6 text-center">
                <h4 className="text-white/80 font-sora font-bold text-sm mb-2">
                  {cert.title}
                </h4>
                <p className="text-slate/60 text-xs leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
