import type { Project } from '../data/site'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) {
    return null
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-poster" style={{ background: project.poster }}>
          <span>{project.year}</span>
          <h3>{project.title}</h3>
        </div>
        <div className="modal-copy">
          <p className="modal-meta">{project.medium}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <ul>
            {project.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
