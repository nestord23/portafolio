import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4 gradient-text">
        {title}
      </h2>
      <p className="text-slate/60 max-w-2xl mx-auto font-mono text-sm">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
