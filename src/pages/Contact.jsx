import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contacts</h1>
      
      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-label">Phone</span>
          <span className="contact-value">19819678224</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">Email</span>
          <a href={`mailto:${profile.email}`} className="contact-link">{profile.email}</a>
        </div>
        <div className="contact-item">
          <span className="contact-label">GitHub</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">guodongling111-pixel</a>
        </div>
      </div>
    </div>
  );
}
