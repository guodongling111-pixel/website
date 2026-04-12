import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>项目作品</h1>
        <p>打造解决问题的工具</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}