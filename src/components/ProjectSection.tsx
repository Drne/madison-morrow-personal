import type { Project } from '../data/site'

type ProjectSectionProps = {
  projects: Project[]
  onSelectProject: (project: Project) => void
}

export function ProjectSection({ projects, onSelectProject }: ProjectSectionProps) {
  return (
    <section id="work" className="section-frame">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">Corpus</p>
          <h2>Selected projects.</h2>
        </div>
        <p className="section-copy">A sampling of original and collaborative productions.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            className="poster-card"
            onClick={() => onSelectProject(project)}
            style={{ background: project.poster }}
            aria-label={`View details for ${project.title}`}
          >
            <span className="poster-meta">
              {project.year} • {project.medium}
            </span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
