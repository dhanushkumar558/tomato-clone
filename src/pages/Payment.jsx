import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const handlePayment = (method) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
   const newOrder = {
  id: Date.now(),
  items: cart,
  method,
  time: new Date().toISOString(), // ✅ always save in ISO format
  eta: new Date(Date.now() + 1 * 60 * 1000).toISOString() // ✅ 25 minutes from now
};

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.removeItem('cart');
    navigate('/orders');
  };

  return (
    <div className="container mt-4">
      <h3>💳 Choose Payment Method</h3>
      <div className="d-flex flex-wrap gap-3 mt-3">
        {["UPI", "Stripe", "PayPal", "Google Pay", "Paytm"].map((method, idx) => (
          <button key={idx} className="btn btn-outline-primary" onClick={() => handlePayment(method)}>
            {method}
          </button>
        ))}
      </div>
    </div>
  );
}
