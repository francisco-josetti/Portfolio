import { featuredProjects } from "../data/portfolio";

export function ProjectsCard() {
  return (
    <div className="projects-section">
      {featuredProjects.map((project) => (
        <a
          key={project.name}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="project-header">
            <span className="project-name">{project.name}</span>
            <span className="project-lang">{project.language}</span>
          </div>
          <p className="project-desc">
            {project.description || "Sem descrição disponível."}
          </p>
        </a>
      ))}
    </div>
  );
}
