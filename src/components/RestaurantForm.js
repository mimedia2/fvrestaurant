import React, { useEffect, useRef, useState } from "react";
import { LoadScript, GoogleMap} from "@react-google-maps/api";
import { Link } from 'react-router-dom';

const RestaurantForm = () => {
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
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <form>
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

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold">Selected Coordinates:</h2>
            <p className="text-gray-600">
              Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
            </p>
          </div>
        </div>
        <Link to='/RestaurantAccount' className="bg-blue-600 text-white text-lg font-bold w-full my-3 px-4 py-3 rounded-xl text-center block" >
        NEXT
        </Link>
        
      </form>
    </div>
  );
};

export default RestaurantForm;
