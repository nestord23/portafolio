import { m } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin, type LucideIcon } from "lucide-react";
import { fadeInUp, slideInLeft, slideInRight } from "../../lib/animations";
import {
  PHONE,
  EMAIL,
  LOCATION,
  LINKEDIN_URL,
  GITHUB_URL,
  toTelLink,
  toMailLink,
} from "../../lib/siteConfig";
import ContactInfoItem from "../ui/ContactInfoItem";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string | null;
}

interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
}

const CONTACT_INFO: ContactItem[] = [
  {
    icon: Phone,
    label: "Teléfono",
    value: PHONE,
    link: toTelLink(PHONE),
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    link: toMailLink(EMAIL),
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: LOCATION,
    link: null,
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: LINKEDIN_URL,
  },
  {
    icon: Github,
    label: "GitHub",
    url: GITHUB_URL,
  },
];

const SERVICES: string[] = [
  "Desarrollo Frontend (React, JavaScript, TypeScript)",
  "Integración de APIs REST",
  "Construcción de componentes reutilizables",
  "Diseño Responsivo",
];

const Contact = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <m.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-sora font-bold gradient-text mb-3">
            Contacto
          </h2>
          <p className="font-mono text-sm text-slate/60">
            Abierto a oportunidades laborales en desarrollo web
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <m.div
            className="glass-panel rounded-lg p-8"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm text-white/60 tracking-wider uppercase mb-6">
              Información de contacto
            </h3>

            <div className="space-y-4 mb-8">
              {CONTACT_INFO.map((item) => (
                <ContactInfoItem key={item.label} {...item} />
              ))}
            </div>

            <h4 className="font-mono text-xs text-slate/50 tracking-wider uppercase mb-3">
              Sígueme en redes
            </h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <m.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate/50 hover:text-lime-neon transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                    </m.a>
                );
              })}
            </div>
          </m.div>

          <m.div
            className="glass-panel rounded-lg p-8"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-mono text-sm text-white/60 tracking-wider uppercase mb-4">
              ¿Buscas un desarrollador web?
            </h3>
            <p className="text-slate/60 text-sm leading-relaxed mb-6">
              Actualmente abierto a oportunidades en desarrollo web. Si buscas
              a alguien con experiencia en React, JavaScript y TypeScript,
              con capacidad de aprendizaje y orientación a resultados,
              estaré encantado de conversar.
            </p>

            <h4 className="font-mono text-xs text-slate/50 tracking-wider uppercase mb-3">
              Servicios que ofrezco:
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service} className="font-mono text-xs text-slate/60 flex items-center gap-2">
                  <span className="text-lime-neon">&gt;</span>
                  {service}
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;