import React from 'react';

const DeliverymanRegistration = () => {
  return (
    <div className="bg-blue-50 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <div className="text-gray-500 cursor-pointer">
            <a href="/profile">
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
          <div className="w-24 h-24 bg-white border-2 border-dashed border-blue-600 rounded-full flex items-center justify-center mb-4">
            <svg
              className="size-16 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
          <label className="text-gray-500 cursor-pointer">
            Upload deliveryman photo
            <input type="file" className="hidden" />
          </label>
        </div>
        <form>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="First name"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
            />
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Last name"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
            />
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-4 flex items-center relative">
            <div className="flex items-center justify-center w-16 h-11 bg-blue-200 border border-white rounded-l-md">
              <span className="text-gray-500">+880</span>
            </div>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-blue-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
            />
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.71 5.03a1.998 1.998 0 002.58 0L21 8M21 8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9-6-9 6"
              />
            </svg>
          </div>
          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
            />
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12h14M9 16h6M12 8v4M17 12V8a4 4 0 00-8 0v4m8 8v2a4 4 0 01-8 0v-2m-4 2a2 2 0 01-2-2v-6a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-2v2a4 4 0 01-8 0v-2"
              />
            </svg>
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
            />
            <svg
              className="w-6 h-6 absolute left-3 top-2.5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M5 12h14M9 16h6M12 8v4M17 12V8a4 4 0 00-8 0v4m8 8v2a4 4 0 01-8 0v-2m-4 2a2 2 0 01-2-2v-6a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-2v2a4 4 0 01-8 0v-2"
              />
            </svg>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliverymanRegistration;
