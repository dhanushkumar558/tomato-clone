import { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(stored.reverse());
  }, []);

  return (
    <div className="container mt-4">
      <h3>📦 Your Orders</h3>
      {orders.length === 0 ? (
        <p className="text-muted">No past orders found.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="border rounded p-3 mb-3">
            <div><strong>Time:</strong> {order.time}</div>
            <div><strong>Payment:</strong> {order.method}</div>
            <div><strong>ETA:</strong> {order.eta}</div>
            <ul className="mt-2">
              {order.items.map(item => (
                <li key={item.id}>{item.name} × {item.qty}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
