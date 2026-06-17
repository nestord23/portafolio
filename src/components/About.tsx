import { motion } from "framer-motion";
import { Palette, Terminal, Layout, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  const stats = [
    { label: "Años de Experiencia", value: "+2" },
    { label: "Proyectos Completados", value: "+15" },
    { label: "Tecnologías Dominadas", value: "+10" },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout size={18} />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind/Sass", level: 85 },
      ],
    },
    {
      title: "Backend & Tools",
      icon: <Terminal size={18} />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Vite/Webpack", level: 80 },
      ],
    },
    {
      title: "Diseño & UX",
      icon: <Palette size={18} />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Accesibilidad", level: 85 },
        { name: "UI Animation", level: 75 },
      ]
    },
    {
      title: "Bases de Datos",
      icon: <Database size={18} />,
      skills: [
        { name: "PostgreSQL", level: 0 },
        { name: "MySQL", level: 0 },
        { name: "Prisma", level: 0 },
      ]
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Sobre mí"
          subtitle="Más que código, construyo soluciones. Mi objetivo es fusionar la lógica técnica con un diseño excepcional."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel rounded-lg p-8">
              <h3 className="text-xl font-sora font-bold mb-6 text-white/90">
                Desarrollador <span className="gradient-text">Full Stack</span> con pasión por el detalle
              </h3>
              <div className="space-y-4 text-slate/70 text-sm leading-relaxed">
                <p>
                  Mi viaje en el desarrollo web comenzó con la curiosidad de entender cómo funcionan las cosas en internet. Hoy, esa curiosidad se ha transformado en una carrera dedicada a crear aplicaciones web robustas, escalables y visualmente impactantes.
                </p>
                <p>
                  Me especializo en el ecosistema de <strong className="text-lime-neon">React</strong> y <strong className="text-lime-neon">TypeScript</strong>, priorizando siempre la experiencia de usuario (UX) y la calidad del código. Creo firmemente que una gran interfaz no solo debe verse bien, sino sentirse instantánea e intuitiva.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-lg p-4 text-center">
                  <div className="text-2xl font-mono font-bold text-neon">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate/60 mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-4">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="glow-border p-5 pt-6 pb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-neon">{category.icon}</span>
                  <h4 className="font-mono text-sm text-white/80 tracking-wider uppercase">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="terminal-tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
