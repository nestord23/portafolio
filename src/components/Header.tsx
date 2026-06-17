import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const isScrolling = useRef(false);

  const sections = useMemo(() => [
    { id: "inicio", name: "Inicio" },
    { id: "sobre-mi", name: "Sobre mí" },
    { id: "proyectos", name: "Proyectos" },
    { id: "experiencia", name: "Experiencia" },
    { id: "contacto", name: "Contacto" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (!isScrolling.current) {
        const scrollPosition = window.scrollY + 100;
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section.id);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    isScrolling.current = true;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerElement = document.querySelector(".header") as HTMLElement;
      const headerHeight = headerElement?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
      setTimeout(() => { isScrolling.current = false; }, 1000);
    }
  };

  return (
    <motion.header
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
        <button
          onClick={() => scrollToSection("inicio")}
          className="font-mono text-neon text-sm tracking-wider hover:opacity-80 transition-opacity"
        >
          ~/nestor-montenegro
        </button>

        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                    activeSection === section.id
                      ? "text-neon"
                      : "text-slate hover:text-lime-neon/70"
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
