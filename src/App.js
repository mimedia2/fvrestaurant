// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Order from './components/Order';
import About from './components/About';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Footer from './Layout/Footer';
import SearchBar from './components/SearchBar';
import RestaurantPage from './components/RestaurantPage';
import RestaurantOwnerPage from './components/RestaurantOwnerPage';
import RestaurantForm from './components/RestaurantForm';
import RestaurantAccount from './components/RestaurantAccount';
import LiveChat from './components/LiveChat';
import DeliverymanRegistration from './components/DeliverymanRegistration';
import AddressManager from './components/AddressManager';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            
            {/* Protected Routes */}
            <Route path="/home" element={<><PrivateRoute element={Home}/><Footer/> </>} />
            <Route path="/favorites" element={<><PrivateRoute element={Favorites}/><Footer/> </>} />
            <Route path="/cart" element={<><PrivateRoute element={Cart}/><Footer/> </>} />
            <Route path="/order" element={<><PrivateRoute element={Order}/><Footer/> </>} />
            <Route path="/about" element={<PrivateRoute element={About}/>} />
            <Route path="/profile" element={<PrivateRoute element={Profile}/>} />
            <Route path='/searchbar' element={<PrivateRoute element={SearchBar}/>}/>
            <Route path='/restaurantpage' element={<PrivateRoute element={RestaurantPage}/>}/>
            <Route path='/restaurantownerpager' element={<PrivateRoute element={RestaurantOwnerPage}/>}/>
            <Route path='/restaurantform' element={<PrivateRoute element={RestaurantForm}/>}/>
            <Route path='/restaurantaccount' element={<PrivateRoute element={RestaurantAccount}/>}/>
            <Route path='/liveChat' element={<PrivateRoute element={LiveChat}/>}/>
            <Route path='/deliverymanRegistration' element={<PrivateRoute element={DeliverymanRegistration}/>}/>
            <Route path="/addressmanager" element={<PrivateRoute element={AddressManager}/>}/>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
