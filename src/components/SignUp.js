import React, { useEffect, useRef, useState } from "react";
import { LoadScript, GoogleMap} from "@react-google-maps/api";
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for toggling confirm password visibility

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Validate form data
    const validateForm = () => {
        const { fullName, phoneNumber, password, confirmPassword, terms } = formData;

        if (!fullName) {
            setErrorMessage('Please enter your full name.');
            return false;
        }

        if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
            setErrorMessage('Please enter a valid 11-digit phone number.');
            return false;
        }

        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return false;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return false;
        }

        if (!terms) {
            setErrorMessage('You must agree to the terms and conditions.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/user/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': process.env.REACT_APP_API_TOKEN
                    },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        email: formData.email,
                        phoneNumber: formData.phoneNumber,
                        address: "some address",
                        password: formData.password,
                    })
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    alert('Registration successful!');
                } else {
                    if (data.message && data.message.includes("Already register this email")) {
                        setErrorMessage('This email is already registered. Please use a different email.');
                    } else {
                        setErrorMessage(data.message || 'Something went wrong. Please try again.');
                    }
                }
            } catch (error) {
                console.error('Network error:', error);
                setErrorMessage('Network error. Please try again later.');
            }
        }
    };
    

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    /* restaurant details */
    const [coordinates, setCoordinates] = useState({
        lat: 22.944039,
        lng: 90.833783,
      });
      const mapRef = useRef(null);
    
      const mapStyles = {
        height: "300px",
        width: "100%",
      };
    
      const onLoad = (mapInstance) => {
        mapRef.current = mapInstance;
        addCenterMarker();
      };
    
      const handleMapIdle = () => {
        if (mapRef.current) {
          const center = mapRef.current.getCenter();
          setCoordinates({
            lat: center.lat(),
            lng: center.lng(),
          });
        }
      };
    
      const addCenterMarker = () => {
        const centerMarker = document.createElement("div");
        centerMarker.style.background =
          'url("/img/Location.png") no-repeat center';
        centerMarker.style.backgroundSize = "contain";
        centerMarker.style.height = "80px";
        centerMarker.style.width = "80px";
        centerMarker.style.position = "absolute";
        centerMarker.style.top = "50%";
        centerMarker.style.left = "50%";
        centerMarker.style.marginTop = "-40px";
        centerMarker.style.marginLeft = "-40px";
        document.getElementById("map").appendChild(centerMarker);
      };
    
      const findLocation = (event) => {
        event.preventDefault();
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              mapRef.current.setCenter(userLocation);
              setCoordinates(userLocation);
            },
            () => {
              alert("Geolocation failed or is not supported by your browser.");
            }
          );
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      };
    
      useEffect(() => {
        // Ensure to initialize the map when component mounts
        window.onload = addCenterMarker;
      }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white p-6 space-y-6">
                {/* Logo */}
                <div className="text-center">
                    <img src="./img/foodverselogo.png" alt="Food Verse Logo" className="mx-auto w-40 h-40" />
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-6">
          <a href="/profile.html">
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative border-dashed border-2 border-blue-600 rounded-md p-4 flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 1.79-8 4v4h16v-4c0-2.21-3.582-4-8-4z"
              />
            </svg>
            <span className="text-gray-400 text-sm text-center">
              Upload Restaurant Logo
            </span>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </div>

          <div className="relative border-dashed border-2 border-blue-600 rounded-md p-4 flex flex-col items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 1.79-8 4v4h16v-4c0-2.21-3.582-4-8-4z"
              />
            </svg>
            <span className="text-gray-400 text-sm text-center">
              Upload Restaurant Cover
            </span>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Restaurant Name (English)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Restaurant Address (English)"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="relative">
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select zone</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Cuisines"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold text-center mb-4">
            Select Your Restaurant Location
          </h1>
          <button
            id="find-location"
            className="bg-blue-500 text-white w-full px-4 py-2 rounded mb-4"
            onClick={findLocation}
          >
            Find Location
          </button>
          <div className="border-2 rounded-md ">
          <LoadScript googleMapsApiKey="AIzaSyBbE_BV395ODtFKApBX_oK0KselqP0Tjcs">
            <GoogleMap
              id="map"
              mapContainerStyle={mapStyles}
              center={coordinates}
              zoom={15}
              onLoad={onLoad}
              onIdle={handleMapIdle}
            >
            </GoogleMap>  
          </LoadScript>

          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-semibold">Selected Coordinates:</h2>
            <p className="text-gray-600">
              Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
            </p>
          </div>
          </div>
        </div>
                    {/* Account area */}
                    <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-300">
                        <span className="inline-block pr-2 py-1 rounded text-purple-500">+880</span>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full outline-none"
                            maxLength="11"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <span onClick={togglePasswordVisibility} className="absolute right-3 top-3 cursor-pointer">
                            {/* Eye/Eye-Slash Toggle Icon */}
                            {showPassword ? '👁' : '🙈'}
                        </span>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <span onClick={toggleConfirmPasswordVisibility} className="absolute right-3 top-3 cursor-pointer">
                            {/* Eye/Eye-Slash Toggle Icon */}
                            {showConfirmPassword ? '👁' : '🙈'}
                        </span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
                        />
                        <label className="text-gray-500 text-sm ">
                            By signing up, I agree with all the <Link to='#' className="text-blue-500 underline">Terms & Conditions</Link>
                        </label>
                    </div>

                    {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                    <div>
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-bold">
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center text-sm text-gray-500">
                        Already have an account? <Link to='/SignIn' className="text-blue-500 underline">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
