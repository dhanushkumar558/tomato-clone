import { hotels } from '../data';
import { motion } from 'framer-motion';
import { MdSearch } from 'react-icons/md';
import { FaSortAmountDownAlt, FaStar, FaCity } from 'react-icons/fa';

export default function SearchFilterBar({
  search,
  setSearch,
  sort,
  setSort,
  rating,
  setRating,
  filterCity,
  setFilterCity
}) {
  const uniqueCities = [...new Set(hotels.map(h => h.location))];

  return (
    <motion.div
      className="bg-white border rounded-3 shadow p-3 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Desktop View */}
      <div className="d-none d-md-flex row g-3 align-items-center">
        {/* 🔍 Search */}
        <div className="col-md-5 d-flex align-items-center">
          <span className="me-2 text-dark"><MdSearch size={22} /></span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control fw-semibold text-dark"
            placeholder="Search food or hotel..."
          />
        </div>

        {/* 🔀 Sort */}
        <div className="col-md-2">
          <div className="input-group">
            <span className="input-group-text bg-white border text-dark"><FaSortAmountDownAlt /></span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="form-select fw-semibold text-dark"
            >
              <option value="">Sort</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
              <option value="rating">Rating: High → Low</option>
            </select>
          </div>
        </div>

        {/* ⭐ Rating */}
        <div className="col-md-2">
          <div className="input-group">
            <span className="input-group-text bg-white border text-dark"><FaStar /></span>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-select fw-semibold text-dark"
            >
              <option value="">Min Rating</option>
              <option value="4.5">4.5+</option>
              <option value="4.0">4.0+</option>
              <option value="3.5">3.5+</option>
            </select>
          </div>
        </div>

        {/* 🏙️ City */}
        <div className="col-md-3">
          <div className="input-group">
            <span className="input-group-text bg-white border text-dark"><FaCity /></span>
            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="form-select fw-semibold text-dark text-capitalize"
            >
              <option value="">City</option>
              {uniqueCities.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="d-md-none">
        {/* 🔍 Search */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-white border text-dark"><MdSearch /></span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control fw-semibold border-start-0 text-dark"
            placeholder="Search food or hotel..."
          />
        </div>

        {/* 🔽 Filters Scrollable */}
        <div
          className="d-flex flex-nowrap gap-2 overflow-auto"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Sort */}
          <div style={{ minWidth: '140px' }}>
            <div className="input-group">
              <span className="input-group-text bg-white border text-dark"><FaSortAmountDownAlt /></span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="form-select fw-semibold text-dark"
              >
                <option value="">Sort</option>
                <option value="priceLow">⬇ Price</option>
                <option value="priceHigh">⬆ Price</option>
                <option value="rating">⭐ Rating</option>
              </select>
            </div>
          </div>

          {/* Rating */}
          <div style={{ minWidth: '140px' }}>
            <div className="input-group">
              <span className="input-group-text bg-white border text-dark"><FaStar /></span>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="form-select fw-semibold text-dark"
              >
                <option value="">Rating</option>
                <option value="4.5">4.5+</option>
                <option value="4.0">4.0+</option>
                <option value="3.5">3.5+</option>
              </select>
            </div>
          </div>

          {/* City */}
          <div style={{ minWidth: '160px' }}>
            <div className="input-group">
              <span className="input-group-text bg-white border text-dark"><FaCity /></span>
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="form-select fw-semibold text-dark text-capitalize"
              >
                <option value="">City</option>
                {uniqueCities.map((city, i) => (
                  <option key={i} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
