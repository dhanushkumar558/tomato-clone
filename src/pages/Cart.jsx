import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const updateQty = (id, delta) => {
    const updated = cart.map(item => {
      if (item.id === id) item.qty += delta;
      return item;
    }).filter(item => item.qty > 0);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h3>🛒 Your Cart</h3>
      {cart.length === 0 ? (
        <p className="text-muted">No items in cart.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div>
                <strong>{item.name}</strong> <span className="text-muted">₹{item.price}</span>
                <br />
                <button className="btn btn-sm btn-secondary me-1" onClick={() => updateQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button className="btn btn-sm btn-secondary ms-1" onClick={() => updateQty(item.id, 1)}>+</button>
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h5 className="mt-3">Total: ₹{total}</h5>
          <Link to="/payment" className="btn btn-primary mt-2">Proceed to Payment</Link>
        </>
      )}
    </div>
  );
}
