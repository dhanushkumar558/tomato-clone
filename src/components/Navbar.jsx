import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link
  to="/"
  onClick={() => window.location.href = '/'}
  className="navbar-brand fw-bold text-warning"
>
  🍅 Tomato
</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}
