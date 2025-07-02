import { useParams, useLocation, Link } from 'react-router-dom';
import { foodItems, hotels } from '../data';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HotelMenu() {
  const { id } = useParams();
  const { hash } = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);

  const hotel = hotels.find(h => h.id === Number(id));
  const menu = foodItems.filter(f => f.hotelId === Number(id));

  useEffect(() => {
    if (hash) {
      const foodId = hash.replace('#food-', '');
      setHighlightedId(foodId);

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [hash]);

  return (
    <div className="container mt-4 pb-5">
      <h2 className="fw-bold mb-4">
        🍽️ {hotel?.name} <span className="text-muted fs-5">({hotel?.location})</span>
      </h2>

      <div className="row g-4">
        {menu.map((item, index) => {
          const isHighlighted = String(item.id) === highlightedId;
          return (
            <div key={item.id} className="col-6 col-md-4 col-lg-3" id={`food-${item.id}`}>
              <Link to={`/food/${item.id}`} className="text-decoration-none text-dark">
                <motion.div
                  className="card border-0 shadow-sm h-100 overflow-hidden rounded-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  style={{
                    boxShadow: isHighlighted
                      ? '0 0 16px 5px rgba(0, 123, 255, 0.5)'
                      : '',
                    transform: isHighlighted ? 'scale(1.02)' : '',
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
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
