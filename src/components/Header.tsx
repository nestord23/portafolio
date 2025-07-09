import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <nav className="nav">
          <div className="logo gradient-text">
            <img 
              src="/IconoPagina.png" 
              alt="Néstor Montenegro" 
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain'
              }}
            />
          </div>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={() => scrollToSection('sobre-mi')}>Sobre mí</a></li>
            <li><a href="#proyectos" onClick={() => scrollToSection('proyectos')}>Proyectos</a></li>
            <li><a href="#experiencia" onClick={() => scrollToSection('experiencia')}>Experiencia</a></li>
            <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
