import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <span>© 2026 Néstor Montenegro. Hecho con</span>
          <Heart
            size={16}
            style={{ color: "var(--primary-mint)" }}
            fill="var(--primary-mint)"
          />
          <span>y mucho café ☕</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            marginTop: "1rem",
            fontSize: "0.9rem",
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Desarrollando experiencias digitales excepcionales
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
