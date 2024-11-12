import React, { useState, useEffect } from 'react';

function Order() {
  const [selectedStatus, setSelectedStatus] = useState("New"); // Tracks the selected order status
  const [orders, setOrders] = useState([]); // Stores orders from the server

  // Fetch orders from the server based on the selected status
  const fetchOrders = async (status) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://api.example.com/orders?status=${status}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]); // Clear orders on error
    }
  };

  // Use effect to fetch orders whenever the selected status changes
  useEffect(() => {
    fetchOrders(selectedStatus);
  }, [selectedStatus]);

  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-200 to-blue-200 p-4 w-full fixed top-0 z-10">
        <div className="flex flex-col items-center mb-2 mt-2 justify-between">
          <div className="w-full text-center">
            <span className="font-bold text-blue-700">My Order</span>
          </div>
        </div>
      </header>

      {/* Order Status Tabs */}
      <div className="flex flex-row items-center justify-between font-bold text-gray-800 p-2 text-center mt-20 fixed w-full bg-white">
        {["New", "Pending", "Completed"].map((status) => (
          <div
            key={status}
            className={`w-28 cursor-pointer ${selectedStatus === status ? "text-blue-500" : ""}`}
            onClick={() => setSelectedStatus(status)}
          >
            <span>{status}</span>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <main className="pt-[6rem]">
        <div className="flex flex-col items-center mt-16">
          {orders.length > 0 ? (
            <ul className="w-full max-w-md">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="p-4 border-b border-gray-200"
                >
                  <div className="flex justify-between">
                    <span>{order.name}</span>
                    <span className="text-gray-500">{order.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
      <main className="flex items-center justify-center min-h-screen bg-white ">
      <div className="text-center">
        {/* Icon with Cart */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-full">
            <svg
              className="h-16 w-16 text-blue-600"
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
          </div>
        </div>
        
        {/* Text Content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">No order yet!</h2>
      </div>
    </main>
          )}
        </div>
      </main>
    </div>
  );
}

export default Order;
