// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyChat from "./components/MyChat";
import Order from "./components/Order";
import About from "./components/About";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./Layout/Footer";
import SearchBar from "./components/SearchBar";
import LiveChat from "./components/LiveChat";
import DeliverymanRegistration from "./components/DeliverymanRegistration";
import AddressManager from "./components/AddressManager";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" theme="dark"/>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={< Home/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp/>}/>

            {/* Protected Routes */}
            
            <Route
              path="/favorites"
              element={
                <>
                  <PrivateRoute element={MyChat} />
                  <Footer />{" "}
                </>
              }
            />

            <Route
              path="/home"
              element={
                <>
                  <PrivateRoute element={Home} />
                  <Footer />{" "}
                </>
              }
            />
            <Route
              path="/order"
              element={
                <>
                  <PrivateRoute element={Order} />
                  <Footer />{" "}
                </>
              }
            />
            <Route path="/about" 
              element={<PrivateRoute element={About} />} 
            />
            <Route
              path="/profile"
              element={<PrivateRoute element={Profile} />}
            />
            <Route
              path="/searchbar"
              element={<PrivateRoute element={SearchBar} />}
            />
            <Route
              path="/liveChat"
              element={<PrivateRoute element={LiveChat} />}
            />
            <Route
              path="/deliverymanRegistration"
              element={<PrivateRoute element={DeliverymanRegistration} />}
            />
            <Route
              path="/addressmanager"
              element={<PrivateRoute element={AddressManager} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
