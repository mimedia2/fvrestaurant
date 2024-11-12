import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemPostPopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg p-4 shadow-lg overflow-y-auto max-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Post New Item</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        <form className="space-y-4">
          {/* Item Image */}
          <label className="block">
            <span className="text-gray-700 font-bold">Item Image</span>
            <input  type="file" accept="image/*" className="mt-1 block w-full border rounded-md p-2" />
          </label>

          {/* Item Name */}
          <label className="block">
            <span className="text-gray-700">Item Name</span>
            <input  type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="e.g., Chicken Burger" />
          </label>

          {/* Item Description */}
          <label className="block">
            <span className="text-gray-700">Item Description</span>
            <textarea className="mt-1 block w-full border rounded-md p-2" placeholder="Describe the main ingredients and special features"></textarea>
          </label>

          {/* Category */}
          <label className="block">
            <span className="text-gray-700 ">Category</span>
            <select className="mt-1 block w-full border rounded-md p-2">
              <option value="">Select Category</option>
              <option value="appetizer">Appetizer</option>
              <option value="main-course">Main Course</option>
              <option value="dessert">Dessert</option>
            </select>
          </label>

          {/* Price */}
          <label className="block">
            <span className="text-gray-700">Price</span>
            <input type="number" className="mt-1 block w-full border rounded-md p-2" placeholder="e.g., 240" />
          </label>

          {/* Availability Status */}
          <label className="block">
            <span className="text-gray-700">Availability Status</span>
            <select className="mt-1 block w-full border rounded-md p-2">
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </label>

          {/* Preparation Time */}
          <label className="block">
            <span className="text-gray-700">Preparation Time (minutes)</span>
            <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="e.g., 15-20" />
          </label>

          {/* Veg/Non-Veg Label */}
          <label className="block">
            <span className="text-gray-700">Veg/Non-Veg</span>
            <select className="mt-1 block w-full border rounded-md p-2">
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
            </select>
          </label>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600">
            Post Item
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-white fixed bottom-0 left-0 w-full p-3 flex justify-around items-center border-t ">
                {/* Home Icon */}
                <Link to="/Home">
                    <svg
                        className="w-7 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12L11.204 3.045a1.125 1.125 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                </Link>

                {/* Favorites Icon */}
                <Link to="/Favorites" className="mr-5">
                    <svg
                        className="w-7 text-slate-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 8.25h9m-9 3H12M2.25 12.25c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                        />
                    </svg>
                </Link>

                <button onClick={() => setShowPopup(true)} className="bg-gradient-to-r from-purple-100 to-blue-100 p-2 rounded-full absolute -top-6 shadow-xl">
                <svg
                  className="w-8 text-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>

                {/* Order Icon */}
                <Link to='/Order' className="ml-5">
                    <svg
                        className="w-7 text-slate-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </Link>

                {/* About Icon */}
                <Link to='/About'>
                    <svg
                        className="w-7 text-slate-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        />
                    </svg>
                </Link>
            </footer>
      {/* Popup Component */}
      {showPopup && <ItemPostPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default Footer;
