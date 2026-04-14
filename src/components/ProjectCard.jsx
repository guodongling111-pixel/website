import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ project, isActive, onClick }) {
  return (
    <div 
      className={`project-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      {project.id === 'artemis' ? (
        <Link to={`/projects/${project.id}`} className="project-link">
          查看详情 →
        </Link>
      ) : (
        project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub →
          </a>
        )
      )}
    </div>
  );
}