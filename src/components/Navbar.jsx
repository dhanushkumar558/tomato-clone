import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/cart', label: 'Cart' },
    { to: '/orders', label: 'Orders' },
    { to: '/saved', label: 'Saved' },
    { to: '/login', label: 'Login' },
    { to: '/signup', label: 'Signup' },
  ];

  const handleNavToggle = () => setExpanded(prev => !prev);
  const closeNav = () => setExpanded(false);

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-2 fixed-top"
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 14 }}
    >
      <Link
        to="/"
        className="navbar-brand fw-bold text-warning fs-3"
        onClick={() => { setExpanded(false); }}
        style={{ letterSpacing: '1px' }}
      >
        <motion.span
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          🍅 Tomato
        </motion.span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
        aria-controls="navbarNav"
        aria-expanded={expanded}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {navItems.map((item) => (
            <li className="nav-item" key={item.to}>
              <Link
                to={item.to}
                onClick={closeNav}
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === item.to ? 'text-warning border-bottom border-warning' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
