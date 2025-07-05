import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  const updateCounts = () => {
    // Cart count = total qty of all items
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotal = cart.reduce((sum, item) => sum + item.qty, 0);
    setCartCount(cartTotal);

    // Saved count = total saved items
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedCount(saved.length);

    // Orders badge = only if any delivery is active
    const now = Date.now();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    const isAnyDelivering = orders.some(order => {
      const eta = new Date(order.eta || new Date(order.time).getTime() + 25 * 60000).getTime();
      return now < eta;
    });

    const activeDeliveries = orders.filter(order => {
  const eta = new Date(order.eta || new Date(order.time).getTime() + 25 * 60000).getTime();
  return now < eta;
});
setOrdersCount(activeDeliveries.length); // ✅ shows correct count

  };

  useEffect(() => {
    updateCounts();
    window.addEventListener('storage', updateCounts);
    const interval = setInterval(updateCounts, 1000); // live refresh

    return () => {
      window.removeEventListener('storage', updateCounts);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/cart', label: 'Cart', badge: cartCount },
    { to: '/orders', label: 'Orders', badge: ordersCount },
    { to: '/saved', label: 'Saved', badge: savedCount },
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
  onClick={() => {
    closeNav();
    window.location.href = '/'; // 👈 This will cause a full reload (fallback option)
  }}
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
            <li className="nav-item position-relative" key={item.to}>
              <Link
                to={item.to}
                onClick={closeNav}
                className={`nav-link px-3 fw-semibold ${
                  location.pathname === item.to
                    ? 'text-warning border-bottom border-warning'
                    : ''
                }`}
              >
                {item.label}
                {item.badge > 0 && (
                  <motion.span
                    className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: '0.7rem', padding: '0.25em 0.5em' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
