import { hotels } from '../data';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CityHotelSection({ city }) {
  const cityHotels = hotels
    .filter(h => h.location.toLowerCase() === city.toLowerCase())
    .slice(0, 4);

  if (!cityHotels.length) return null;

  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold text-dark">🏨 Browse Hotels in <span className="text-primary">{city}</span></h4>
        <Link to={`/hotels/${city}`} className="btn btn-outline-primary btn-sm">View All</Link>
      </div>

      <div className="row g-3">
        {cityHotels.map(hotel => (
          <div className="col-md-3" key={hotel.id}>
            <HotelCard hotel={hotel} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
