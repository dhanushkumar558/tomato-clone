import { hotels } from '../data';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CityHotelSection({ city }) {
  const isMobile = window.innerWidth < 768;

  const cityHotels = hotels
    .filter(h => h.location.toLowerCase() === city.toLowerCase())
    .slice(0, isMobile ? 2 : 4); // 👈 Show 2 hotels only on mobile, 4 on desktop

  if (!cityHotels.length) return null;

  return (
    <motion.div
      className="mb-5 pt-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section Header */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-3">
        <h5 className="fw-bold text-dark mb-0">
          🏨 Browse Hotels in <span className="text-primary">{city}</span>
        </h5>
        <Link
          to={`/hotels/${city}`}
          className="btn btn-outline-primary btn-sm"
        >
          View All
        </Link>
      </div>

      {/* Hotel Cards */}
      <div className="row g-3">
        {cityHotels.map(hotel => (
          <div
            key={hotel.id}
            className="col-12 col-md-3" // 👈 1 full row on mobile (col-12), 4 per row on desktop
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
