import { useParams } from 'react-router-dom';
import { foodItems, hotels } from '../data';

export default function FoodDetail() {
  const { id } = useParams();
  const food = foodItems.find(f => f.id === Number(id));
  const hotel = hotels.find(h => h.id === food.hotelId);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(item => item.id === food.id);
    if (!exists) cart.push({ ...food, qty: 1 });
    else exists.qty += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-5">
          <img src={food.img} className="img-fluid rounded" alt={food.name} />
        </div>
        <div className="col-md-7">
          <h2>{food.name}</h2>
          <p className="text-muted">Hotel: {hotel.name}</p>
          <p>{food.description}</p>
          <p><strong>Cooking Method:</strong> {food.cookingMethod}</p>
          <p><strong>Available Toppings:</strong> {food.toppings.join(', ')}</p>
          <h4>₹{food.price}</h4>
          <button className="btn btn-success mt-2" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
