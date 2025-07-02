import { useParams } from 'react-router-dom';
import { hotels } from '../data';
import HotelCard from '../components/HotelCard';

export default function AllHotelsByCity() {
  const { city } = useParams();
  const cityHotels = hotels.filter(h => h.location.toLowerCase() === city.toLowerCase());

  return (
    <div className="container mt-4">
      <h3>Hotels in {city}</h3>
      <div className="d-flex flex-wrap gap-4 mt-3">
        {cityHotels.length ? (
          cityHotels.map(hotel => <HotelCard key={hotel.id} hotel={hotel} />)
        ) : (
          <p>No hotels found in {city}.</p>
        )}
      </div>
    </div>
  );
}
