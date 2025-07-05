import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">

          {/* Logo and Tagline */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold text-warning">🍅 Tomato</h5>
            <p className="small  mb-0">
              Delivering happiness, one bite at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 text-center">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/orders" className="text-light text-decoration-none">My Orders</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="fw-semibold mb-3">Contact</h6>
            <p className="small mb-1">📞 +91 98765 43210</p>
            <p className="small mb-1">✉️ support@tomatoapp.com</p>
            <div className="d-flex justify-content-center justify-content-md-end gap-2 mt-2">
              <a href="#" className="text-light fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary mt-4 " />
        <p className="text-center small  mb-0">
          © {new Date().getFullYear()} Tomato. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
