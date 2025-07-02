import { hotels } from '../data';
import { motion } from 'framer-motion';

export default function SearchFilterBar({
  search,
  setSearch,
  sort,
  setSort,
  filterHotel,
  setFilterHotel,
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
      <div className="row g-2 align-items-center">
        {/* Search bar */}
        <div className="col-md-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="🔍 Search food or hotel..."
          />
        </div>

        {/* Sort dropdown */}
        <div className="col-md-2">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
            <option value="">Sort</option>
            <option value="priceLow">Price: Low → High</option>
            <option value="priceHigh">Price: High → Low</option>
            <option value="rating">Rating: High → Low</option>
          </select>
        </div>

        {/* Rating filter */}
        <div className="col-md-2">
          <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-select">
            <option value="">Min Rating</option>
            <option value="4.5">4.5+</option>
            <option value="4.0">4.0+</option>
            <option value="3.5">3.5+</option>
          </select>
        </div>

        {/* City filter */}
        <div className="col-md-2">
          <select value={filterCity} onChange={(e) => setFilterCity(e.target.value)} className="form-select">
            <option value="">Filter by City</option>
            {uniqueCities.map((city, i) => (
              <option key={i} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  );
}
