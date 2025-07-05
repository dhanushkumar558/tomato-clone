import { Link } from 'react-router-dom';
import { hotels } from '../data';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FoodCard({ item }) {
  const hotel = hotels.find(h => h.id === item.hotelId);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems') || '[]');
    setIsSaved(saved.some(f => f.id === item.id));
  }, [item.id]);

  const toggleSave = (e) => {
    e.preventDefault(); // prevent navigation
    let saved = JSON.parse(localStorage.getItem('savedItems') || '[]');
    if (isSaved) {
      saved = saved.filter(f => f.id !== item.id);
    } else {
      saved.push(item);
    }
    localStorage.setItem('savedItems', JSON.stringify(saved));
    setIsSaved(!isSaved);
  };

  return (
    <motion.div
      className="card h-100 shadow-sm border-0 position-relative overflow-hidden rounded-4"
      whileHover={{ scale: 1.02, boxShadow: '0 0 12px rgba(0,0,0,0.2)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Save Button - Heart Bottom Right */}
      <button
        onClick={toggleSave}
        className="btn btn-sm position-absolute bottom-0 end-0 m-2 rounded-circle bg-white shadow-sm"
        title={isSaved ? 'Unsave' : 'Save'}
        style={{ width: '36px', height: '36px', zIndex: 10 }}
      >
        <i
          className={`bi ${isSaved ? 'bi-heart-fill text-danger' : 'bi-heart'}`}
          style={{ fontSize: '18px' }}
        ></i>
      </button>

      <Link
        to={`/hotel/${item.hotelId}`}
        state={{ highlightId: item.id }}
        className="text-decoration-none text-dark"
      >
     <div className="fw-semibold text-dark px-3 pt-2 fs-6">
  {hotel?.name}
</div>


        <img
          src={item.img}
          className="card-img-top"
          alt={item.name}
          style={{ height: '160px', objectFit: 'cover' }}
        />
        <div className="card-body pb-4"> {/* Extra padding for bottom button */}
          <h5 className="card-title mb-1">{item.name}</h5>
          <p className="text-success fw-bold mb-1">₹{item.price}</p>
          <span className="text-warning small">⭐ {item.rating}</span>
        </div>
      </Link>
    </motion.div>
  );
}
