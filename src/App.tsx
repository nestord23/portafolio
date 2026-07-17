import { lazy, Suspense } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

const ShaderBackground = lazy(() => import("./components/effects/ShaderBackground"));
const About = lazy(() => import("./components/sections/About"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));
const ScrollToTop = lazy(() => import("./components/layout/ScrollToTop"));

const App = () => {
  return (
    <LazyMotion features={domAnimation}>
    <MotionConfig reducedMotion="user">
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
    </MotionConfig>
    </LazyMotion>
  );
};

export default App;
