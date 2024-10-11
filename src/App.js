import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Order from './components/Order';
import About from './components/About';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar';
import RestaurantForm from './components/RestaurantForm';
import RestaurantAccount from './components/RestaurantAccount';
import RestaurantOwnerPage from './components/RestaurantOwnerPage';
import RestaurantPage from './components/RestaurantPage';
import DeliverymanRegistration from './components/DeliverymanRegistration';
import LiveChat from './components/LiveChat';
import Footer from './Layout/Footer'; // Footer Component
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>} />
          <Route path="/favorites" element={<><Favorites /><Footer /></>} />
          <Route path="/cart" element={<><Cart /><Footer /></>} />
          <Route path="/order" element={<><Order /><Footer /></>} />
          <Route path="/about" element={<><About /><Footer /></>} />
          <Route path="/profile" element={<><Profile /><Footer /></>} />
          <Route path="/searchbar" element={<><SearchBar /><Footer /></>} />
          <Route path="/restaurantform" element={<><RestaurantForm /><Footer /></>} />
          <Route path="/restaurantaccount" element={<><RestaurantAccount /><Footer /></>} />
          <Route path="/restaurantownerpage" element={<><RestaurantOwnerPage /><Footer /></>} />
          <Route path="/restaurantpage" element={<><RestaurantPage /><Footer /></>} />
          <Route path="/deliverymanregistration" element={<><DeliverymanRegistration /><Footer /></>} />
          <Route path="/livechat" element={<><LiveChat /><Footer /></>} />
          {/* These paths will NOT render the Footer */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
