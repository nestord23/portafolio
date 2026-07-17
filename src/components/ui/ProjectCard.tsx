import { m, type Variants } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TechIcon } from "../../lib/techIcons";
import type { Project } from "../../types/project";
import GridPattern from "../effects/GridPattern";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      staggerChildren: 0.07,
      delayChildren: 0.15,
      ease: "easeOut",
    },
  }),
};

const cornerTopVariants: Variants = {
  hidden: { opacity: 0, x: -8, y: -8, scale: 0.8 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const cornerBottomVariants: Variants = {
  hidden: { opacity: 0, x: 8, y: 8, scale: 0.8 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const thumbnailVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const iconBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 0.3, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <m.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      className="glass-panel rounded-lg overflow-hidden group relative"
    >
      <m.div
        variants={cornerTopVariants}
        className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-lime-neon z-10"
      />
      <m.div
        variants={cornerBottomVariants}
        className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-lime-neon z-10"
      />

      <m.div
        variants={thumbnailVariants}
        className="relative h-44 bg-emerald-depth/30 flex items-center justify-center overflow-hidden"
      >
        <GridPattern
          cellSize={20}
          color="rgba(171, 214, 0, 0.3)"
          className="opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-obsidian to-transparent z-10" />

        <m.div
          variants={iconBadgeVariants}
          whileHover={{
            opacity: 0.6,
            scale: 1.15,
            rotate: [0, -8, 8, -4, 0],
            transition: { duration: 0.4 },
          }}
          className="relative z-10 text-5xl"
          style={{ cursor: "default" }}
        >
          <TechIcon tech={project.tech[0]} size={48} />
        </m.div>

        {project.featured && (
          <m.div
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="absolute top-3 right-3 z-20"
          >
            <span className="font-mono text-[10px] text-neon border border-lime-neon/30 px-2 py-0.5 tracking-wider bg-obsidian/80">
              DESTACADO
            </span>
          </m.div>
        )}
      </m.div>

      <div className="p-5">
        <m.h3
          variants={fadeInItem}
          className={`font-sora font-bold text-base mb-2 ${
            project.featured ? "gradient-text" : "text-white/90"
          }`}
        >
          {project.title}
        </m.h3>

        <m.p
          variants={fadeInItem}
          className="text-slate/60 text-xs leading-relaxed mb-4 line-clamp-3"
        >
          {project.description}
        </m.p>

        <m.div variants={fadeInItem} className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech, tIndex) => (
            <m.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.55 + tIndex * 0.05 }}
              className="inline-flex items-center gap-1 font-mono text-[10px] text-lime-neon/80 border border-lime-neon/20 bg-lime-neon/5 px-2 py-0.5"
            >
              <TechIcon tech={tech} />
              {tech}
            </m.span>
          ))}
        </m.div>

        <m.div variants={fadeInItem} className="flex gap-2">
          {project.demoUrl && (
            <m.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 font-mono text-xs text-obsidian bg-lime-neon px-3 py-1.5 hover:bg-lime-neon/90 transition-colors"
            >
              <FaExternalLinkAlt size={10} aria-hidden="true" /> Demo
            </m.a>
          )}
          <m.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 font-mono text-xs text-neon border border-lime-neon/30 px-3 py-1.5 hover:bg-lime-neon/10 hover:border-lime-neon/50 transition-colors"
          >
            <FaGithub size={12} aria-hidden="true" /> Code
          </m.a>
        </m.div>
      </div>
    </m.div>
  );
};

export default ProjectCard;