// pages/SavedItems.jsx
import { useEffect, useState } from 'react';
import FoodCard from '../components/FoodCard';

export default function SavedItems() {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedItems') || '[]');
    setSaved(items);
  }, []);

  return (
    <div className="container mt-4">
      <h3>🔖 Your Saved Foods</h3>
      {saved.length === 0 ? (
        <p className="text-muted">No items saved yet.</p>
      ) : (
        <div className="row g-3 mt-2">
          {saved.map(item => (
            <div className="col-6 col-md-3" key={item.id}>
              <FoodCard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
