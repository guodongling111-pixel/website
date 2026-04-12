import { profile } from '../data/content';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>关于我</h1>
        <p>打造有价值的产品</p>
      </div>

      <section className="about-section">
        <h2>Background</h2>
        <div className="about-grid">
          <div className="about-item">
            <h3>Education</h3>
            <p>{profile.background.education}</p>
          </div>
          <div className="about-item">
            <h3>Certifications</h3>
            <p>{profile.background.certifications}</p>
          </div>
          <div className="about-item">
            <h3>Focus</h3>
            <p>{profile.background.focus}</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {profile.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="about-section">
        <h2>Interests</h2>
        <ul className="interests-list">
          {profile.interests.map((interest, i) => (
            <li key={i}>{interest}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}