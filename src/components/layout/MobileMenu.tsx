import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import NavLink from "../ui/NavLink";

interface Section {
  id: string;
  name: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  sections: Section[];
  activeSection: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, sections, activeSection, onNavigate, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay: cierra el menú al hacer click fuera */}
          <m.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}
          />

          {/* Panel del menú */}
          <m.div
            className="glass-panel fixed top-0 right-0 bottom-0 w-64 z-50 flex flex-col md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-end p-6">
              <button type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="text-slate hover:text-lime-neon transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 px-8">
              <ul className="flex flex-col gap-8">
                {sections.map((section) => (
                  <li key={section.id}>
                    <NavLink
                      id={section.id}
                      name={section.name}
                      isActive={activeSection === section.id}
                      onClick={onNavigate}
                      className="text-sm"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;