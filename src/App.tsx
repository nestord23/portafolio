import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ShaderBackground from "./components/ShaderBackground";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <>
      <ShaderBackground />
      <Header />
      <Hero />
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="font-mono text-sm text-lime-neon animate-pulse">CARGANDO...</div>
        </div>
      }>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
