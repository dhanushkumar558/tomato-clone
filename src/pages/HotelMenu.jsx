import { useParams, useLocation, Link } from 'react-router-dom';
import { foodItems, hotels } from '../data';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HotelMenu() {
  const { id } = useParams();
  const location = useLocation();
  const menuRef = useRef({});
  const [highlightedId, setHighlightedId] = useState(null);
  const [savedItems, setSavedItems] = useState([]);

  const hotel = hotels.find(h => h.id === Number(id));
  const menu = foodItems.filter(f => f.hotelId === Number(id));

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(saved);
  }, []);

  const toggleSave = (e, item) => {
    e.preventDefault(); // stop Link navigation
    let updated = [...savedItems];
    const exists = updated.find(f => f.id === item.id);
    if (exists) {
      updated = updated.filter(f => f.id !== item.id);
    } else {
      updated.push(item);
    }
    setSavedItems(updated);
    localStorage.setItem('savedItems', JSON.stringify(updated));
  };

  useEffect(() => {
    if (location.state?.highlightId) {
      const foodId = location.state.highlightId;
      setHighlightedId(String(foodId));
      setTimeout(() => {
        const el = menuRef.current[foodId];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [location.state]);

  return (
    <div className="container mt-4 pb-5">
      <h2 className="fw-bold mb-4">
        🍽️ {hotel?.name}{' '}
        <span className="text-muted fs-5">({hotel?.location})</span>
      </h2>

      <div className="row g-4">
        {menu.map((item, index) => {
          const isHighlighted = String(item.id) === highlightedId;
          const isSaved = savedItems.some(f => f.id === item.id);

          return (
            <div
              key={item.id}
              className="col-6 col-md-4 col-lg-3"
              ref={el => (menuRef.current[item.id] = el)}
            >
              <Link
                to={`/food/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <motion.div
                  className="card h-100 border-0 overflow-hidden rounded-4 position-relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  style={{
                    boxShadow: isHighlighted
                      ? '0 0 20px 5px rgba(0, 191, 255, 0.8)'
                      : '0 1px 3px rgba(0,0,0,0.1)',
                    transform: isHighlighted ? 'scale(1.03)' : 'scale(1)',
                    border: isHighlighted ? '2px solid #00bfff' : 'none',
                    zIndex: isHighlighted ? 10 : 1,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '160px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">{item.name}</h5>
                    <p className="mb-1 text-success fw-bold">₹{item.price}</p>
                    <p className="text-warning mb-0">⭐ {item.rating}</p>
                  </div>

                  {/* Save/Unsave button */}
                  <button
                    onClick={(e) => toggleSave(e, item)}
                    className={`btn btn-sm position-absolute top-0 end-0 m-2 rounded-circle ${
                      isSaved ? 'btn-warning' : 'btn-outline-secondary'
                    }`}
                    title={isSaved ? 'Unsave' : 'Save'}
                    style={{ width: '34px', height: '34px', zIndex: 20 }}
                  >
                    {isSaved ? '💾' : '🔖'}
                  </button>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
