import { m } from "framer-motion";
import { Palette, Terminal, Layout, Code2, GitBranch, Eye } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import SkillCard, { type SkillCategory } from "../ui/SkillCard";
import { fadeInUp } from "../../lib/animations";

interface Stat {
  label: string;
  value: string;
}

const STATS: Stat[] = [
  { label: "Años de Experiencia", value: "+2" },
  { label: "Proyectos Completados", value: "+15" },
  { label: "Certificaciones", value: "5" },
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Lenguajes",
    icon: Code2,
    skills: ["JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "C#"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Angular (básico)", "Tailwind CSS", "Sass", "Bootstrap", "Redux", "Context API"],
  },
  {
    title: "Backend & APIs",
    icon: Terminal,
    skills: ["Node.js", "REST", "Fetch API", "Axios"],
  },
  {
    title: "Herramientas",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Bitbucket", "Vite", "Webpack", "NPM", "Yarn", "Linux"],
  },
  {
    title: "Diseño",
    icon: Palette,
    skills: ["Responsive Design", "UX/UI", "Figma"],
  },
  {
    title: "Metodologías",
    icon: Eye,
    skills: ["Scrum", "Ágil"],
  },
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Sobre mí"
          subtitle="Desarrollador Web con experiencia en React, JavaScript y TypeScript. Estudiante de Ingeniería en Sistemas."
        />

        <m.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="glass-panel rounded-lg p-8">
            <h3 className="text-xl font-sora font-bold mb-6 text-white/90">
              Desarrollador <span className="gradient-text">Web</span> enfocado en Frontend
            </h3>
            <div className="space-y-4 text-slate/70 text-sm leading-relaxed">
              <p>
                Desarrollo aplicaciones web utilizando <strong className="text-lime-neon">React</strong>, <strong className="text-lime-neon">JavaScript</strong> y <strong className="text-lime-neon">TypeScript</strong>. Construyo interfaces responsivas, integro APIs REST y creo componentes reutilizables. Estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala.
              </p>
              <p>
                Trabajo bajo metodologías ágiles y gestiono el código con Git. También tengo experiencia en análisis de información, automatización de procesos y documentación técnica. Mi enfoque está en escribir código claro y colaborar de forma efectiva con equipos multidisciplinarios.
              </p>
            </div>
          </div>
        </m.div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {STATS.map((stat) => (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;