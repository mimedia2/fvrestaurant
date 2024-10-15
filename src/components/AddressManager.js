import React, { useState, useRef, useEffect } from "react";
import { LoadScript, GoogleMap } from "@react-google-maps/api";
import axios from 'axios'; // Import axios

const AddressManager = () => {
  const initialAddresses = JSON.parse(localStorage.getItem("addresses")) || [];
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    label: "Home",
    lat: 22.944039,
    lng: 90.833783,
    address: "",
    name: "",
    phone: "",
  });
  const mapRef = useRef(null);

  const mapStyles = { height: "300px", width: "100%" };

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
    addCenterMarker();
  };

  const handleMapIdle = () => {
    if (mapRef.current) {
      const center = mapRef.current.getCenter();
      setNewAddress((prev) => ({
        ...prev,
        lat: center.lat(),
        lng: center.lng(),
      }));
    }
  };

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const addCenterMarker = () => {
    const centerMarker = document.createElement("div");
    centerMarker.style.background = 'url("/img/Location.png") no-repeat center';
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

 // API request to update address
 const token = process.env.REACT_APP_API_TOKEN; // Access token from .env file

 const updateUserAddress = async (updatedAddresses) => {
     const userId = localStorage.getItem('userId');  // Get user ID from local storage
 
     try {
         const response = await axios.put(
             `${process.env.REACT_APP_API_URL}/user/update-user?id=${userId}`,
             {
                 address: {
                     home: updatedAddresses.find(addr => addr.label === 'Home'),
                     office: updatedAddresses.find(addr => addr.label === 'Office'),
                     others: updatedAddresses.find(addr => addr.label === 'Others'),
                 },
             },
             {
                 headers: {
                     'x-auth-token': token,  // Use 'x-auth-token' header
                     'Content-Type': 'application/json',
                 },
             }
         );
         console.log('Address updated successfully:', response.data);
     } catch (error) {
         console.error('Error updating address:', error);
     }
 };
 



  // Save address to state, localStorage and API
  const saveAddress = (e) => {
    e.preventDefault();
    const updatedAddresses = [...addresses, newAddress];
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses)); // Save to localStorage
    setShowAddressForm(false);
    resetNewAddress(); // Reset form values
    updateUserAddress(updatedAddresses); // Call API to update the address
  };

  const resetNewAddress = () => {
    setNewAddress({
      label: "Home",
      lat: 22.944039,
      lng: 90.833783,
      address: "",
      name: "",
      phone: "",
    });
  };

  const deleteAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  /* const handleGetUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapRef.current.setCenter(userLocation);
          setNewAddress((prev) => ({ ...prev, lat: userLocation.lat, lng: userLocation.lng }));
        },
        () => {
          alert("Geolocation failed. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }; */

  useEffect(() => {
    if (showAddressForm) {
      mapRef.current = null;
    }
  }, [showAddressForm]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-md">My Address</h1>
      {/* Render saved addresses */}
      <div>
        <ul>
          {addresses.map((address, index) => (
            <li key={index} className="flex justify-between items-center p-3 mb-3 border rounded-md shadow-md">
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-blue-700">Name:</p>
                  <p>{address.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-blue-700">Phone:</p>
                  <p>{address.phone}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-bold text-blue-700">{address.label}:</p>
                  <p>{address.address.length > 20 ? `${address.address.substring(0, 20)}...` : address.address}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <button className="text-white bg-blue-500 rounded-sm font-bold mb-3" onClick={() => setShowAddressForm(true)}>Edit</button>
                <button className="text-white bg-red-500 rounded-sm font-bold px-2" onClick={() => deleteAddress(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4" onClick={() => setShowAddressForm(true)}>+ Add Another Address</button>
      </div>

      {showAddressForm && (
        <form onSubmit={saveAddress}>
        <label className="block text-sm mb-2">Label</label>
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${newAddress.label === "Home" ? "bg-blue-400" : "bg-gray-200"}`}
            onClick={() => setNewAddress({ ...newAddress, label: "Home" })}
          >
            Home
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${newAddress.label === "Office" ? "bg-blue-400" : "bg-gray-200"}`}
            onClick={() => setNewAddress({ ...newAddress, label: "Office" })}
          >
            Office
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${newAddress.label === "Others" ? "bg-blue-400" : "bg-gray-200"}`}
            onClick={() => setNewAddress({ ...newAddress, label: "Others" })}
          >
            Others
          </button>
        </div>

        <label className="block text-sm mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={newAddress.name}
          onChange={handleInputChange}
          className="w-full border px-4 py-2 rounded-md mb-4"
          placeholder="Enter your name"
          required
        />

        <label className="block text-sm mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={newAddress.phone}
          onChange={handleInputChange}
          className="w-full border px-4 py-2 rounded-md mb-4"
          placeholder="Enter your phone number"
          required
        />

        <label className="block text-sm mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={newAddress.address}
          onChange={handleInputChange}
          className="w-full border px-4 py-2 rounded-md mb-4"
          placeholder="Enter address details"
          required
        />

        {showAddressForm && (
          <LoadScript googleMapsApiKey="AIzaSyBbE_BV395ODtFKApBX_oK0KselqP0Tjcs">
            <GoogleMap
              id="map"
              mapContainerStyle={mapStyles}
              center={{ lat: newAddress.lat, lng: newAddress.lng }}
              zoom={16}
              onLoad={onMapLoad}
              onIdle={handleMapIdle}
            />
          </LoadScript>
        )}

        <div className="bg-white rounded-lg shadow-lg p-4 mt-4">
          <h2 className="text-lg font-semibold">Selected Coordinates:</h2>
          <p>Latitude: {newAddress.lat}, Longitude: {newAddress.lng}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
        >
          Save Location
        </button>
      </form>
      )}
    </div>
  );
};

export default AddressManager;
