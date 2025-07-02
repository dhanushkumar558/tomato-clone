import { useParams } from 'react-router-dom';
import { hotels } from '../data';
import HotelCard from '../components/HotelCard';
import 'animate.css';

export default function AllHotelsByCity() {
  const { city } = useParams();
  const cityHotels = hotels.filter(h => h.location.toLowerCase() === city.toLowerCase());

  return (
    <div className="container mt-5 pb-5">
      <h3 className="mb-4">
        🏨 Hotels in <span className="text-primary">{city}</span>
      </h3>

      {cityHotels.length ? (
        <div className="row g-4 animate__animated animate__fadeInUp">
          {cityHotels.map(hotel => (
            <div key={hotel.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning mt-4" role="alert">
          No hotels found in <strong>{city}</strong>.
        </div>
      )}
    </div>
  );
}
