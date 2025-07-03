import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { foodItems, hotels } from '../data';
import { reviews as allReviews } from '../reviews';
import 'animate.css';

export default function FoodDetail() {
  const { id } = useParams();
  
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const food = foodItems.find(f => f.id === Number(id));
  const hotel = hotels.find(h => h.id === food.hotelId);

  const storageKey = `reviews-${food.id}`;
  const defaultReviews = allReviews.filter(r => r.foodId === food.id);

  const [reviewList, setReviewList] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : defaultReviews;
  });

  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(reviewList));
  }, [reviewList]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedItems') || '[]');
    setIsSaved(saved.some(f => f.id === food.id));
  }, [food.id]);

  const toggleSave = () => {
    let saved = JSON.parse(localStorage.getItem('savedItems') || '[]');
    if (isSaved) {
      saved = saved.filter(f => f.id !== food.id);
    } else {
      saved.push(food);
    }
    localStorage.setItem('savedItems', JSON.stringify(saved));
    setIsSaved(!isSaved);
  };

  const handleAddToCart = () => {
    if (qty < 1) return;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === food.id);
    if (existing) existing.qty += qty;
    else cart.push({ ...food, qty });
    localStorage.setItem('cart', JSON.stringify(cart));
    setMessage(`🛒 ${qty} × ${food.name} added to cart!`);
    setQty(1);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!user.trim() || !comment.trim() || !rating || rating < 1 || rating > 5) {
      alert('Please fill all fields with valid values');
      return;
    }

    const newReview = {
      foodId: food.id,
      user: user.trim(),
      comment: comment.trim(),
      rating: Number(rating),
    };

    setReviewList(prev => [newReview, ...prev]);
    setUser('');
    setComment('');
    setRating('');

    setTimeout(() => {
      const section = document.getElementById('review-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row g-4 align-items-start">
        {/* Image Left */}
        <div className="col-md-5 animate__animated animate__fadeInLeft">
          <div
            className="rounded shadow-sm overflow-hidden w-100 position-relative"
            style={{ height: '420px' }}
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />

            {/* Heart Save Button */}
           <div
  onClick={toggleSave}
  className="position-absolute top-0 start-0 m-2"
  style={{ cursor: 'pointer', zIndex: 10 }}
  title={isSaved ? 'Unsave' : 'Save'}
>
  <span className={`fs-2 ${isSaved ? 'text-danger' : 'text-primary'}`}>
    {isSaved ? '❤️' : '🤍'}
  </span>
</div>

          </div>

          <div className="text-center mt-3">
            <span className="badge bg-warning text-dark fs-6">⭐ {food.rating}</span>
          </div>
        </div>

        {/* Info Right */}
        <div className="col-md-7 animate__animated animate__fadeInRight">
          <h2 className="fw-bold">{food.name}</h2>
          <p className="text-muted">
            from <strong>{hotel.name}</strong> ({hotel.location})
          </p>

          <div className="my-3">
            <h5 className="text-success">About this dish</h5>
            <p className="text-secondary">{food.description}</p>
          </div>

          <div className="mb-3">
            <h6 className="fw-semibold">🍳 Cooking Method</h6>
            <p>{food.cookingMethod}</p>
          </div>

          <div className="mb-4">
            <h6 className="fw-semibold">🥗 Toppings</h6>
            <ul className="ps-3">
              {food.toppings.map((top, i) => (
                <li key={i}>{top}</li>
              ))}
            </ul>
          </div>

          {/* Quantity & Order */}
          <div className="d-flex flex-wrap align-items-center gap-3">
            <h3 className="text-danger mb-0">₹{food.price}</h3>
            <div className="input-group" style={{ width: '130px' }}>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQty(q => Math.max(1, q - 1))}
              >
                −
              </button>
              <input
                type="number"
                className="form-control text-center"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQty(q => q + 1)}
              >
                +
              </button>
            </div>
            <button className="btn btn-success px-4" onClick={handleAddToCart}>
              🛒 Order Now
            </button>
          </div>

          {message && (
            <div className="alert alert-success mt-3 animate__animated animate__fadeInUp">
              {message}
            </div>
          )}
        </div>
      </div>

      {/* Review Section */}
      <div id="review-section" className="mt-5 pt-4 border-top">
        <h4 className="mb-4">🗣️ Customer Reviews</h4>
        {reviewList.length === 0 ? (
          <p className="text-muted">No reviews yet. Be the first!</p>
        ) : (
          <ul className="list-group">
            {reviewList.map((r, i) => (
              <li key={i} className="list-group-item py-3">
                <div className="fw-bold mb-1">
                  {r.user} <span className="text-warning">⭐ {r.rating}</span>
                </div>
                <div className="text-muted">{r.comment}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Review */}
      <div className="mt-5">
        <h5 className="mb-3">📝 Leave a Review</h5>
        <form onSubmit={handleSubmitReview} className="row g-2">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Your Name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Rating</option>
              <option value="5">⭐ 5 - Excellent</option>
              <option value="4">⭐ 4 - Good</option>
              <option value="3">⭐ 3 - Average</option>
              <option value="2">⭐ 2 - Poor</option>
              <option value="1">⭐ 1 - Bad</option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Write your review..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary mt-2">Submit Review</button>
          </div>
        </form>
      </div>
    </div>
  );
}
