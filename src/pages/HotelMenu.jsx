import { useParams, useLocation, Link } from 'react-router-dom';
import { foodItems, hotels } from '../data';
import { useEffect, useState } from 'react';

export default function HotelMenu() {
  const { id } = useParams();
  const { hash } = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);

  const hotel = hotels.find(h => h.id === Number(id));
  const menu = foodItems.filter(f => f.hotelId === Number(id));

  useEffect(() => {
    if (hash) {
      const foodId = hash.replace('#food-', '');
      setHighlightedId(foodId);

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [hash]);

  return (
    <div className="container mt-4">
      <h2>{hotel?.name} Menu</h2>
      <div className="row g-3 mt-3">
        {menu.map(item => {
          const isHighlighted = String(item.id) === highlightedId;
          return (
            <div key={item.id} className="col-6 col-md-3" id={`food-${item.id}`}>
              <Link to={`/food/${item.id}`} className="text-decoration-none text-dark">
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    border: isHighlighted ? '2px solid #0d6efd' : '',
                    boxShadow: isHighlighted
                      ? '0 0 15px 4px rgba(13, 110, 253, 0.7)'
                      : '',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">₹{item.price}</p>
                    <p className="text-warning">⭐ {item.rating}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
