import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HotelMenu from './pages/HotelMenu';
import FoodDetail from './pages/FoodDetail';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Orders from './pages/Orders';
import AllHotelsByCity from './pages/AllHotelsByCity';
import SavedItems from './pages/SavedItems';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* Main container with top padding to avoid overlap */}
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hotel/:id" element={<HotelMenu />} />
          <Route path="/hotels/:city" element={<AllHotelsByCity />} />
          <Route path="/food/:id" element={<FoodDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/saved" element={<SavedItems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
