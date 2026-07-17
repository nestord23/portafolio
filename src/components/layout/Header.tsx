  import { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { Menu } from "lucide-react";
import NavLink from "../ui/NavLink";
import MobileMenu from "./MobileMenu";

interface Section {
  id: string;
  name: string;
}

const SECTIONS: Section[] = [
  { id: "inicio", name: "Inicio" },
  { id: "sobre-mi", name: "Sobre mí" },
  { id: "proyectos", name: "Proyectos" },
  { id: "experiencia", name: "Experiencia" },
  { id: "contacto", name: "Contacto" },
];

const SCROLL_BLUR_THRESHOLD = 50; // px scrolleados antes de activar el fondo con blur
const ACTIVE_SECTION_OFFSET = 100; // margen para detectar la sección activa
const DEFAULT_HEADER_HEIGHT = 70; // fallback si el header aún no midió su altura
const SCROLL_LOCK_DURATION = 1000; // ms que se ignora el scroll spy tras un click

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolling = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const scrollLockTimeoutRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > SCROLL_BLUR_THRESHOLD);

      if (!isScrolling.current) {
        const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;

        const current = SECTIONS.find((section) => {
          const element = document.getElementById(section.id);
          if (!element) return false;
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        });

        if (current) setActiveSection(current.id);
      }

      rafIdRef.current = null;
    };

    const handleScroll = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (scrollLockTimeoutRef.current !== null) {
        clearTimeout(scrollLockTimeoutRef.current);
      }
    };
  }, []);

  // Bloquea el scroll del body mientras el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    isScrolling.current = true;

    const headerHeight = headerRef.current?.offsetHeight ?? DEFAULT_HEADER_HEIGHT;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition - headerHeight,
      behavior: "smooth",
    });

    if (scrollLockTimeoutRef.current !== null) {
      clearTimeout(scrollLockTimeoutRef.current);
    }
    scrollLockTimeoutRef.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, SCROLL_LOCK_DURATION);
  };

  return (
    <>
      <m.header
        ref={headerRef}
        className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-panel backdrop-blur-2xl" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <button type="button"
            onClick={() => scrollToSection("inicio")}
            className="font-mono text-neon text-sm tracking-wider hover:opacity-80 transition-opacity"
          >
            ~/nestor-montenegro
          </button>

          <nav>
            <ul className="hidden md:flex items-center gap-8">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <NavLink
                    id={section.id}
                    name={section.name}
                    isActive={activeSection === section.id}
                    onClick={scrollToSection}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <button type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menú"
            className="md:hidden text-slate hover:text-lime-neon transition-colors"
          >
            <Menu size={22} />
          </button>
        </div>
      </m.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        sections={SECTIONS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;