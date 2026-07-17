import { m, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ category, index }: SkillCardProps) => {
  const Icon = category.icon;

  return (
    <m.div
      className="glow-border p-5 pt-6 pb-6 h-full"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.4) }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-neon">
          <Icon size={18} />
        </span>
        <h4 className="font-mono text-sm text-white/80 tracking-wider uppercase">
          {category.title}
        </h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span key={skill} className="terminal-tag">
            {skill}
          </span>
        ))}
      </div>
    </m.div>
  );
};

export default SkillCard;