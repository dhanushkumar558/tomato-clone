import { hotels } from '../data';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';

export default function CityHotelSection({ city }) {
  const cityHotels = hotels.filter(h => h.location.toLowerCase() === city.toLowerCase()).slice(0, 4);

  if (!cityHotels.length) return null;

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="text-primary">🏨 Browse Hotels in {city}</h5>
        <Link to={`/hotels/${city}`} className="btn btn-sm btn-outline-primary">View All</Link>
      </div>
      <div className="d-flex flex-wrap gap-3">
        {cityHotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
