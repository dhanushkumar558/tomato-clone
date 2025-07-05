import { hotels } from '../data';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CityHotelSection({ city }) {
  const isMobile = window.innerWidth < 768;

  const cityHotels = hotels
    .filter(h => h.location.toLowerCase() === city.toLowerCase())
    .slice(0, isMobile ? 2 : 4); // Show 2 on mobile, 4 on desktop

  if (!cityHotels.length) return null;

  return (
    <motion.div
      className="mb-5 pt-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section Header */}
      <div className="position-relative mb-3">
        <h5 className="fw-bold text-dark text-center mb-2 mb-md-0">
          🏨 Browse Hotels in <span className="text-primary">{city}</span>
        </h5>

        {/* View All on right (only desktop) */}
        <Link
          to={`/hotels/${city}`}
          className="btn btn-outline-primary btn-sm position-absolute top-0 end-0 d-none d-md-block"
        >
          View All
        </Link>

        {/* View All below (mobile) */}
        <div className="d-block d-md-none text-end mt-2">
          <Link
            to={`/hotels/${city}`}
            className="btn btn-outline-primary btn-sm"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Hotel Cards Centered on Desktop */}
      <div className="row g-3 justify-content-center">
        {cityHotels.map(hotel => (
          <div
            key={hotel.id}
            className="col-12 col-sm-6 col-md-3"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
