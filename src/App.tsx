import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const ShaderBackground = lazy(() => import("./components/ShaderBackground"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <ShaderBackground />
      </Suspense>
      <Header />
      <main>
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
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
};

export default App;
