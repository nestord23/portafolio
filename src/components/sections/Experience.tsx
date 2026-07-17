import { useRef } from "react";
import { m, type Variants } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import TimelineCanvas from "../effects/TimelineCanvas";

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  duties: string[];
}

interface CertificationEntry {
  title: string;
  desc: string;
}

const experiences: ExperienceEntry[] = [
  {
    title: "Desarrollador Frontend",
    company: "Cz-Labs",
    period: "feb 2025 — jun 2025",
    duties: [
      "Desarrollo y mantenimiento de aplicaciones web con React, JavaScript, HTML5 y CSS3.",
      "Integración y consumo de APIs REST para conectar el frontend con servicios backend.",
      "Construcción de componentes reutilizables para optimizar el desarrollo y facilitar el mantenimiento.",
      "Optimización del rendimiento de las aplicaciones y gestión del código mediante Git y GitHub.",
      "Trabajo colaborativo bajo metodología Scrum en equipos multidisciplinarios.",
    ],
  },
  {
    title: "Cobrador Investigador",
    company: "Recaudadora y Calificadora de Créditos",
    period: "sep 2019 — feb 2025",
    duties: [
      "Administración y análisis de bases de datos SQL para generación de reportes.",
      "Automatización de procesos internos para mejorar la eficiencia operativa.",
      "Elaboración de documentación técnica de los procesos implementados.",
      "Soporte operativo en la gestión de carteras de clientes.",
    ],
  },
];

const certifications: CertificationEntry[] = [
  { title: "JavaScript de Cero a Experto", desc: "Formación completa en JavaScript moderno" },
  { title: "Node.js - Creando APIs", desc: "Desarrollo de APIs REST con Node.js" },
  { title: "React de Cero a Experto", desc: "Especialización en React y su ecosistema" },
  { title: "Power BI desde Cero", desc: "Análisis de datos y visualización" },
  { title: "Tailwind CSS con Ejemplos Reales", desc: "Diseño de interfaces con Tailwind CSS" },
];

// --- Animation helpers -------------------------------------------------

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

// --- Subcomponents -------------------------------------------------------

const ExperienceCard = ({ entry }: { entry: ExperienceEntry }) => (
  <div className="glass-panel rounded-lg p-5 md:p-6">
    <span className="font-mono text-[10px] text-lime-neon/60 tracking-wider uppercase">
      {entry.period}
    </span>
    <h3 className="text-white/90 font-sora font-bold text-lg mt-1">{entry.title}</h3>
    <p className="font-mono text-xs text-lime-neon/80 mt-0.5 mb-3">{entry.company}</p>
    <ul className="space-y-1.5">
      {entry.duties.map((duty) => (
        <li key={duty} className="text-slate/60 text-xs leading-relaxed">
          {duty}
        </li>
      ))}
    </ul>
  </div>
);

const CertificationCard = ({ cert }: { cert: CertificationEntry }) => (
  <div className="glow-border p-5 pt-6 pb-6 text-center">
    <h4 className="text-white/80 font-sora font-bold text-sm mb-2">{cert.title}</h4>
    <p className="text-slate/60 text-xs leading-relaxed">{cert.desc}</p>
  </div>
);

// --- Main component --------------------------------------------------------

const Experience = () => {
  const timelineRef = useRef<HTMLOListElement>(null);

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Experiencia" />

        {/* ─── Desktop: timeline horizontal ─── */}
        <ol
          ref={timelineRef}
          className="relative hidden md:flex flex-row justify-center items-stretch max-w-5xl mx-auto mb-20 list-none gap-x-64"
          style={{ minHeight: 480 }}
        >
          <TimelineCanvas containerRef={timelineRef} />

          {experiences.map((entry, index) => (
            <m.li
              key={`${entry.company}-${entry.period}`}
              className="relative flex flex-col items-center"
              variants={fadeUp(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {index === 0 ? (
                <>
                  <div className="flex-1 flex items-end pb-8 justify-center">
                    <div className="w-full max-w-xs" data-boundary="right">
                      <ExperienceCard entry={entry} />
                    </div>
                  </div>
                  <div
                    data-timeline-node
                    className="w-4 h-4  flex-shrink-0"
                  />
                  <div className="flex-1" />
                </>
              ) : (
                <>
                  <div className="flex-1" />
                  <div
                    data-timeline-node
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <div className="flex-1 flex items-start pt-8 justify-center">
                    <div className="w-full max-w-xs" data-boundary="left">
                      <ExperienceCard entry={entry} />
                    </div>
                  </div>
                </>
              )}
            </m.li>
          ))}
        </ol>

        {/* ─── Mobile: timeline vertical (sin Three.js) ─── */}
        <div className="flex flex-col md:hidden max-w-3xl mx-auto mb-20">
          {experiences.map((entry, index) => (
            <m.div
              key={`${entry.company}-${entry.period}`}
              className="relative pl-6 pb-12 last:pb-0 border-l-2 border-lime-neon/20"
              variants={fadeUp(index * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-lime-neon -translate-x-[7px] z-10" />
              <ExperienceCard entry={entry} />
            </m.div>
          ))}
        </div>

        <m.div variants={fadeUp(0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-center font-mono text-sm text-white/60 tracking-wider uppercase mb-8">
            Certificaciones y Educación
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} cert={cert} />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Experience;
