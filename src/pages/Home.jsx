import { Link } from 'react-router-dom';
import { skills, projects, profile } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const mainProject = projects.find(p => p.id === 'artemis');

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">查看项目</Link>
          <Link to="/contact" className="btn btn-secondary">联系我</Link>
        </div>
      </section>

      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              {skills.frontend.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Mapping</h3>
            <ul>
              {skills.mapping.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data & Automation</h3>
            <ul>
              {skills.data.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="skill-category">
            <h3>Deployment</h3>
            <ul>
              {skills.deployment.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="featured-project">
        <h2 className="section-title">Featured Project</h2>
        <ProjectCard project={mainProject} />
      </section>
    </div>
  );
}