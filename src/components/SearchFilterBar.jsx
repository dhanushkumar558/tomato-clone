import { hotels } from '../data';
import { motion } from 'framer-motion';

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
      className="bg-white border rounded shadow-sm p-3 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* PC View: full row */}
      <div className="d-none d-md-flex row g-2 align-items-center">
        <div className="col-md-6  ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="🔍 Search food or hotel..."
          />
        </div>
        <div className="col-md-2">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
            <option value="">Sort</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="rating">Rating: High → Low</option>
          </select>
        </div>
        <div className="col-md-2">
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-select">
            <option value="">Min Rating</option>
            <option value="4.5">4.5+</option>
            <option value="4.0">4.0+</option>
            <option value="3.5">3.5+</option>
          </select>
        </div>
        <div className="col-md-2">
          <select value={filterCity} onChange={(e) => setFilterCity(e.target.value)} className="form-select">
            <option value="">Filter by City</option>
            {uniqueCities.map((city, i) => (
              <option key={i} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile View: two stacked rows */}
     {/* Mobile View: search first, filters below */}
<div className="d-md-none">
  {/* Search first */}
  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="form-control mb-2"
    placeholder="🔍 Search food or hotel..."
  />

  {/* Scrollable filter row below */}
  <div
    className="d-flex flex-nowrap gap-2 overflow-auto"
    style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
  >
    <div style={{ minWidth: '100px' }}>
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
        <option value="">Sort</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="rating">Rating: High → Low</option>
      </select>
    </div>
    <div style={{ minWidth: '100px' }}>
      <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-select">
        <option value="">Rating</option>
        <option value="4.5">4.5+</option>
        <option value="4.0">4.0+</option>
        <option value="3.5">3.5+</option>
      </select>
    </div>
    <div style={{ minWidth: '100px' }}>
      <select value={filterCity} onChange={(e) => setFilterCity(e.target.value)} className="form-select">
        <option value="">City</option>
        {uniqueCities.map((city, i) => (
          <option key={i} value={city}>{city}</option>
        ))}
      </select>
    </div>
  </div>
</div>

    </motion.div>
  );
}
