import type { Project } from "../types/project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hack Chat",
    description:
      "Aplicación de mensajería en tiempo real. El frontend consume una API con WebSockets para la comunicación entre usuarios.",
    tech: ["React", "WebSockets", "Node.js"],
    githubUrl: "https://github.com/nestord23/chat_FE",
    featured: true,
  },
  {
    id: 2,
    title: "book-picker",
    description:
      "Aplicación web para gestionar lecturas personales. Permite clasificar libros y seleccionar próximas lecturas.",
    tech: ["Astro", "JavaScript", "CSS3", "Node.js"],
    githubUrl: "https://github.com/nestord23/book-picker-fe",
    featured: true,
  },
  {
    id: 3,
    title: "Money Control",
    description:
      "Aplicación para el control de presupuestos personales. Permite registrar ingresos y gastos, y visualizar el balance financiero.",
    tech: ["React", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/nestord23/MoneyControl_FE.git",
    featured: true,
  },
  {
    id: 4,
    title: "MintForge",
    description:
      "Herramienta para crear colecciones de tokens no fungibles. Desarrollada con Node.js y TypeScript.",
    tech: ["Node.js", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/nestord23/MintForge.git",
    featured: true,
  },
  {
    id: 5,
    title: "El Señor de la Merced",
    description:
      "Aplicación web desarrollada con React. Interfaz intuitiva y diseño responsivo.",
    tech: ["React", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nestord23/el-senor-de-la-merced",
    demoUrl: "https://elsenordelamerced.vercel.app/",
    featured: false,
  },
  {
    id: 6,
    title: "SixEyes Bot",
    description:
      "Bot para Discord que consulta información deportiva y multimedia a través de APIs. Desarrollado con TypeScript.",
    tech: ["Node.js", "TypeScript", "JavaScript"],
    githubUrl: "https://github.com/nestord23/sixeyes-bot",
    featured: false,
  },
];