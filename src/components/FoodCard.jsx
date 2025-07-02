import { Link } from 'react-router-dom';
import { hotels } from '../data';

export default function FoodCard({ item }) {
  const hotel = hotels.find(h => h.id === item.hotelId);
  return (
    <Link to={`/hotel/${item.hotelId}#food-${item.id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <div className="bg-light px-2 py-1 text-muted small fw-bold">{hotel?.name}</div>
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="text-success fw-bold">₹{item.price}</p>
          <p className="text-warning mb-0">⭐ {item.rating}</p>
        </div>
      </div>
    </Link>
  );
}
