import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { path: '/', label: 'Intro' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contacts' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Portfolio
        </Link>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
