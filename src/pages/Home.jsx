import { useState } from 'react';
import { foodItems, hotels } from '../data';
import FoodCard from '../components/FoodCard';
import HotelCard from '../components/HotelCard';
import SearchFilterBar from '../components/SearchFilterBar';
import CityHotelSection from '../components/CityHotelSection';
import { motion } from 'framer-motion';

export default function Home() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [filterHotel, setFilterHotel] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const [rating, setRating] = useState('');

  // Filter logic
  let filteredFoods = foodItems.filter(f => {
    const hotel = hotels.find(h => h.id === f.hotelId);
    return (
      (!search || f.name.toLowerCase().includes(search.toLowerCase()) || hotel?.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterHotel || f.hotelId === Number(filterHotel)) &&
      (!filterCity || hotel?.location === filterCity) &&
      (!rating || f.rating >= Number(rating))
    );
  });

  // Sort logic
  if (sort === 'priceLow') filteredFoods.sort((a, b) => a.price - b.price);
  else if (sort === 'priceHigh') filteredFoods.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') filteredFoods.sort((a, b) => b.rating - a.rating);

  // Chunked food display
  const CHUNK_SIZE = 12;
  const foodChunks = [];
  for (let i = 0; i < filteredFoods.length; i += CHUNK_SIZE) {
    foodChunks.push(filteredFoods.slice(i, i + CHUNK_SIZE));
  }

  const trendingHotels = [...hotels]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="container mt-4 pb-5">
      {/* 🔍 Sticky Filter Bar */}
      <motion.div
        className="bg-white sticky-top py-3"
        style={{ zIndex: 20 }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>

      {/* 🌟 Trending Hotels */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="mb-3 text-primary">🌟 Trending Hotels</h4>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {trendingHotels.map(hotel => (
            <button
              key={hotel.id}
              className={`btn btn-sm rounded-pill ${
                filterHotel == hotel.id ? 'btn-primary' : 'btn-outline-secondary'
              }`}
              onClick={() => setFilterHotel(filterHotel == hotel.id ? '' : hotel.id)}
            >
              {hotel.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 🍽️ Food Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="mb-3 fw-bold">🍽️ Popular Foods</h4>

        {filteredFoods.length === 0 && (
          <p className="text-muted">No foods match your filters.</p>
        )}

        {foodChunks.map((chunk, index) => {
          const firstHotel = hotels.find(h => h.id === chunk[0].hotelId);
          const cityForChunk = firstHotel?.location;

          return (
            <div key={index}>
              {/* Food Cards Row */}
              <motion.div
                className="row g-4 mb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {chunk.map(item => (
                  <div key={item.id} className="col-6 col-sm-4 col-md-3">
                    <FoodCard item={item} />
                  </div>
                ))}
              </motion.div>

              {/* 🏨 City Hotel Section */}
              {cityForChunk && <CityHotelSection city={cityForChunk} />}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
