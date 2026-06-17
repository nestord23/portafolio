import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          className="flex items-center justify-center gap-1.5 text-slate/50 text-sm font-mono"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <span>© {currentYear} Néstor Montenegro. Hecho con</span>
          <Heart size={14} className="text-lime-neon" fill="#abd600" />
          <span>y mucho café</span>
        </motion.div>

        <motion.p
          className="text-slate/40 text-xs font-mono mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Desarrollando experiencias digitales excepcionales
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
