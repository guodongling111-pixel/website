import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>联系我</h1>
        <p>一起交流</p>
      </div>

      <div className="contact-links">
        <a href={`mailto:${profile.email}`} className="contact-item">
          <span className="contact-label">Email</span>
          <span className="contact-value">{profile.email}</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com</span>
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">linkedin.com</span>
          </a>
        )}
      </div>
    </div>
  );
}