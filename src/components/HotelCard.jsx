import { Link } from 'react-router-dom';

export default function HotelCard({ hotel }) {
  return (
    <div className="card" style={{ width: '16rem' }}>
      <img src={hotel.img} className="card-img-top" alt={hotel.name} />
      <div className="card-body">
        <h5 className="card-title">{hotel.name}</h5>
        <p className="card-text">{hotel.location}</p>
        <Link to={`/hotel/${hotel.id}`} className="btn btn-primary">View Menu</Link>
      </div>
    </div>
  );
}
