import { useEffect, useState } from 'react';

const ETA_DURATION_MS = 1 * 60 * 1000; // 1 minute ETA

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({ date: '', method: '' });
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(stored.reverse());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getEtaFromOrder = (order) =>
    new Date(new Date(order.time).getTime() + ETA_DURATION_MS).toISOString();

  const filteredOrders = orders.filter(order => {
    const matchesDate = !filters.date || order.time.startsWith(filters.date);
    const matchesMethod = !filters.method || order.method === filters.method;
    return matchesDate && matchesMethod;
  });

  const deliveryProgress = (eta) => {
    const etaTime = new Date(eta).getTime();
    const startTime = etaTime - ETA_DURATION_MS;
    if (!eta || isNaN(etaTime) || now >= etaTime) return 100;
    if (now <= startTime) return 0;
    const progress = ((now - startTime) / (etaTime - startTime)) * 100;
    return Math.min(100, Math.max(0, Math.round(progress)));
  };

  const calculateCountdown = (eta) => {
    const etaTime = new Date(eta).getTime();
    if (!eta || isNaN(etaTime)) return 'ETA unavailable';
    const diff = etaTime - now;
    if (diff <= 0) return '✅ Delivered';
    const mins = Math.floor(diff / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return `${mins}m ${secs}s left`;
  };

  const handleReorder = (items) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updated = [...cart];
    items.forEach(item => {
      const existing = updated.find(i => i.id === item.id);
      if (existing) existing.qty += item.qty;
      else updated.push({ ...item });
    });
    localStorage.setItem('cart', JSON.stringify(updated));
    alert('🛒 Items added to cart!');
  };

  const generateInvoice = (order) => {
    const eta = getEtaFromOrder(order);
    const total = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    let content = `🍅 Tomato - Invoice\n\nOrder ID: ${order.id}\nTime: ${order.time}\nPayment: ${order.method}\nETA: ${eta}\n\nItems:\n`;
    order.items.forEach(item => {
      content += `• ${item.name} × ${item.qty} = ₹${item.qty * item.price}\n`;
    });
    content += `\nTotal: ₹${total}\n\nThank you for ordering with Tomato!`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Invoice_${order.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const uniqueMethods = [...new Set(orders.map(o => o.method))];

  return (
    <div className="container mt-4 pb-5">
      <h3 className="mb-4">📦 Your Orders</h3>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={filters.date}
            onChange={e => setFilters({ ...filters, date: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filters.method}
            onChange={e => setFilters({ ...filters, method: e.target.value })}
          >
            <option value="">All Payment Methods</option>
            {uniqueMethods.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => setFilters({ date: '', method: '' })}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <p className="text-muted">No matching orders found.</p>
      ) : (
        filteredOrders.map(order => {
          const eta = getEtaFromOrder(order);
          return (
            <div key={order.id} className="border rounded-4 p-3 mb-4 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <div><strong>Time:</strong> {new Date(order.time).toLocaleString()}</div>
                  <div><strong>Payment:</strong> {order.method}</div>
                </div>
                <div className="text-end">
                  <div><strong>ETA:</strong> {new Date(eta).toLocaleTimeString()}</div>
                  <div className={`fw-semibold ${deliveryProgress(eta) === 100 ? 'text-success' : 'text-primary'}`}>
                    {calculateCountdown(eta)}
                  </div>
                </div>
              </div>

              <div className="progress mb-3" style={{ height: '8px' }}>
                <div
                  className={`progress-bar ${deliveryProgress(eta) === 100 ? 'bg-success' : 'bg-info'}`}
                  style={{ width: `${deliveryProgress(eta)}%` }}
                />
              </div>

              <ul className="list-group mb-3">
                {order.items.map(item => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    <span>{item.name} × {item.qty}</span>
                    <span>₹{item.qty * item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-outline-secondary" onClick={() => generateInvoice(order)}>
                  📄 Download Invoice
                </button>
                <button className="btn btn-outline-success" onClick={() => handleReorder(order.items)}>
                  🔁 Reorder
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
