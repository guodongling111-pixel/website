import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/projects', label: '项目' },
  { path: '/about', label: '关于' },
  { path: '/contact', label: '联系' },
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