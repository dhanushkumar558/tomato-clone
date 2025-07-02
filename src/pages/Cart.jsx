import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { hotels } from '../data';

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
    <div className="container mt-4 pb-5">
      <h3 className="mb-4">🛒 Your Cart</h3>

      {cart.length === 0 ? (
        <div className="text-center text-muted py-5">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ fontSize: '5rem' }}>🛍️</div>
            <p className="mt-3">Your cart is empty.</p>
            <Link to="/" className="btn btn-outline-primary mt-2">Browse Foods</Link>
          </motion.div>
        </div>
      ) : (
        <>
          <div className="row g-3">
            {cart.map((item, i) => {
              const hotel = hotels.find(h => h.id === item.hotelId);

              return (
                <motion.div
                  key={item.id}
                  className="col-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="d-flex align-items-center gap-3 border rounded-4 shadow-sm p-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{item.name}</h5>
                      <small className="text-muted">from {hotel?.name}</small>
                      <div className="d-flex align-items-center mt-2">
                        <span className="text-success fw-bold me-3">₹{item.price}</span>
                        <div className="input-group input-group-sm" style={{ width: '120px' }}>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => updateQty(item.id, -1)}
                          >−</button>
                          <input
                            type="text"
                            className="form-control text-center"
                            readOnly
                            value={item.qty}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => updateQty(item.id, 1)}
                          >+</button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      ✖ Remove
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Total Section */}
          <motion.div
            className="mt-4 border-top pt-4 d-flex justify-content-between align-items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h5>Total: <span className="text-success">₹{total}</span></h5>
            <Link to="/payment" className="btn btn-primary px-4 fw-semibold">
              Proceed to Payment →
            </Link>
          </motion.div>
        </>
      )}
    </div>
  );
}
