import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./../data/projects";

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes, desarrollados con React, JavaScript y TypeScript."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;