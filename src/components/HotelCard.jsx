import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HotelCard({ hotel }) {
  return (
    <motion.div
      className="card border-0 shadow-sm rounded-4 overflow-hidden h-100"
      style={{ maxWidth: '100%', minWidth: '240px' }}
      whileHover={{ scale: 1.035, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img
        src={hotel.img}
        className="card-img-top"
        alt={hotel.name}
        style={{
          height: '160px',
          objectFit: 'cover',
          borderBottom: '1px solid #eee',
        }}
      />
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <h5 className="fw-semibold mb-1">{hotel.name}</h5>
        <p className="text-muted small mb-2">{hotel.location}</p>
        {hotel.rating && (
          <div className="text-warning mb-2" style={{ fontSize: '0.9rem' }}>
            ⭐ {hotel.rating.toFixed(1)}
          </div>
        )}
        <Link
          to={`/hotel/${hotel.id}`}
          className="btn btn-outline-primary btn-sm px-3"
        >
          🍽️ View Menu
        </Link>
      </div>
    </motion.div>
  );
}
