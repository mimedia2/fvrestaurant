import React from 'react';
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-purple-200 to-blue-20 min-h-screen'>
      {/* Header Section */}
      <div className= 'w-full fixed z-10 '>
        <header className="bg-white p-4 m-4 -mb-4 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="img/burger.png"
              alt="Boom Boom Burger"
              className="w-20 h-16 rounded-md object-cover shadow-md"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-800">Boom Boom Burger</h1>
              <p className="text-xs">Lakshmipur, Bangladesh</p>
            </div>
          </div>
        </header>
      </div>

      <div className="p-4">
        {/* Delivery Info Section */}
        <section className="bg-white mt-28 p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 text-purple-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} // Fixed attribute
              stroke="currentColor"
            >
              <path
                strokeLinecap="round" // Fixed attribute
                strokeLinejoin="round" // Fixed attribute
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <span className="text-lg font-semibold text-gray-800">4.7</span>
            <span className="text-sm text-gray-600">5000+ ratings</span>
          </div>
        </section>

        {/* Items Section */}
        <section className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
            {/* Item Example */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
              <img
                src="img/burger.png"
                alt="Smokey BBQ Chicken Cheese Burger"
                className="w-full h-32 sm:h-48 object-cover rounded-md"
              />
              <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
                Smokey BBQ Chicken Cheese Burger
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 mx-2 my-1">Tk 240</p>
                <div className='flex flex-row items-center'>
                  <svg
                    className="h-5 w-5 text-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5} // Fixed attribute
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round" // Fixed attribute
                      strokeLinejoin="round" // Fixed attribute
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <span className="px-2 font-bold text-gray-700">4.7</span>
                </div>
              </div>
            </div>

            {/* Repeat more items as needed */}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
