import React from 'react';
const Wallet = () => {
    return (

        <div className='p-4 bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen'>
            <div className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-center rounded-md py-4 mb-4 '>
                <p>My Wallet</p>
            </div>
            <div className='flex flex-row justify-between space-x-4 text-center'>
              <div className='border-2 flex flex-col w-full bg-purple-500 rounded-md p-2 text-white'>
                <span className='text-2xl font-black py-2'>5953 TK</span>
                <span>Total Sell</span>
              </div>
              <div className='border-2 flex flex-col w-full bg-blue-500 rounded-md p-2 text-white'>
              <span className='text-2xl font-black py-2'>309 TK</span>
              <span>Current Balance</span>
              </div>
            </div>
            <div className='flex flex-row justify-between space-x-4 text-center mt-4'>
            <div className='border-2 flex flex-col w-full bg-cyan-500 rounded-md p-2 text-white'>
                <span className='text-2xl font-black py-2'>34</span>
                <span>Total Order</span>
              </div>
              <div className='border-2 flex flex-col w-full bg-indigo-500 rounded-md p-2 text-white'>
                <span className='text-2xl font-black py-2'>12</span>
                <span>Today Order</span>
              </div>
            </div>
            <div className='p-4'>
              <p className='text-center text-lg font-bold text-gray-700'>
                Latest Order
              </p>
              <div>

              </div>
            </div>
        </div>
    );
};
export default Wallet