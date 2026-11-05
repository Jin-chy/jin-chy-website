import { projects } from "../data.js";
import ProjectCard from "./ProjectCard.jsx";

// To add a project, add an object to the `projects` list in src/data.js.
export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  );
}
