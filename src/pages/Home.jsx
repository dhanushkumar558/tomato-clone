import { useState } from 'react';
import { foodItems, hotels } from '../data';
import FoodCard from '../components/FoodCard';
import HotelCard from '../components/HotelCard';
import SearchFilterBar from '../components/SearchFilterBar';
import CityHotelSection from '../components/CityHotelSection';

export default function Home() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [filterHotel, setFilterHotel] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [rating, setRating] = useState('');

  // 1. Filter logic
  let filteredFoods = foodItems.filter(f => {
    const hotel = hotels.find(h => h.id === f.hotelId);
    return (
      (!search || f.name.toLowerCase().includes(search.toLowerCase()) || hotel?.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterHotel || f.hotelId === Number(filterHotel)) &&
      (!filterCity || hotel?.location === filterCity) &&
      (!rating || f.rating >= Number(rating))
    );
  });

  // 2. Sorting
  if (sort === 'priceLow') filteredFoods.sort((a, b) => a.price - b.price);
  else if (sort === 'priceHigh') filteredFoods.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filteredFoods.sort((a, b) => b.rating - a.rating);

  // 3. Split into chunks of 12 foods
  const CHUNK_SIZE = 12;
  const foodChunks = [];
  for (let i = 0; i < filteredFoods.length; i += CHUNK_SIZE) {
    foodChunks.push(filteredFoods.slice(i, i + CHUNK_SIZE));
  }

  // 4. Get cities for hotel preview
  const cities = [...new Set(hotels.map(h => h.location))];

  // 5. Trending Hotels (top 5 rated)
  const trendingHotels = [...hotels]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="container mt-4">
      <SearchFilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        filterHotel={filterHotel}
        setFilterHotel={setFilterHotel}
        rating={rating}
        setRating={setRating}
        filterCity={filterCity}
        setFilterCity={setFilterCity}
      />

      {/* ⭐ Trending Hotels */}
      <h5 className="mb-3 text-primary">🌟 Trending Hotels</h5>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {trendingHotels.map(hotel => (
          <button
            key={hotel.id}
            className={`btn btn-sm ${filterHotel == hotel.id ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setFilterHotel(filterHotel == hotel.id ? '' : hotel.id)}
          >
            {hotel.name}
          </button>
        ))}
      </div>

      <h4 className="mb-3">🍽️ Popular Foods</h4>

      {filteredFoods.length === 0 && (
        <p className="text-muted">No foods match your filters.</p>
      )}

      {foodChunks.map((chunk, index) => (
        <div key={index}>
          <div className="row g-3 mb-4">
            {chunk.map(item => (
              <div key={item.id} className="col-6 col-md-3">
                <FoodCard item={item} />
              </div>
            ))}
          </div>

          {/* Insert hotel section after each chunk */}
          {cities[index] && (
            <CityHotelSection city={cities[index]} />
          )}
        </div>
      ))}
    </div>
  );
}
