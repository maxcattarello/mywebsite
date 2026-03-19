interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  period: string;
  type: 'work' | 'side';
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <div className="card__body">
        <div className="card__header">
          <h3 className="card__title">{project.title}</h3>
          <span className="card__period">{project.period}</span>
        </div>
        <p className="card__description">{project.description}</p>
        <div className="card__footer">
          <div className="card__tags" aria-label="Tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              className="card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              View →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
