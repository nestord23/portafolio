import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      className="text-center mb-16"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, staggerChildren: 0.15 },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
        }}
        className="text-3xl md:text-4xl font-sora font-bold mb-4 gradient-text"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
        className="text-slate/60 max-w-2xl mx-auto font-mono text-sm"
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
