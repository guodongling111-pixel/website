import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contacts</h1>
      
      <div className="contact-list">
        <p>Phone: 15172873607</p>
        <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p>GitHub: <a href={profile.github} target="_blank" rel="noopener noreferrer">guodongling111-pixel</a></p>
      </div>
    </div>
  );
}
