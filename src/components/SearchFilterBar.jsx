import { hotels } from '../data';

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
    <div className="bg-light p-3 rounded shadow-sm mb-4">
      <div className="row g-2 align-items-center">
        <div className="col-md-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
            placeholder="Search food or hotel..."
          />
        </div>

        <div className="col-md-2">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="form-select">
            <option value="">Sort</option>
            <option value="priceLow">Price Low → High</option>
            <option value="priceHigh">Price High → Low</option>
            <option value="rating">Rating High → Low</option>
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
            {uniqueCities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
