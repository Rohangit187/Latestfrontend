import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [business, setBusiness] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!business || !location) return;
    console.log(business);
    console.log(location);

    navigate('/listing', {
      state: {
        business,
        location,
      },
    });
  };
   return (
    <>
      {/* Mobile View */}
      <div className="w-full md:hidden px-md-4 text-black">
        <div className="bg-white shadow-md rounded-lg p-3 flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Search Businesses..."
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="!bg-white w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center py-4 text-black">
        <div className="bg-gray-100 shadow-lg rounded-lg p-3 flex space-x-3 w-3/5">
          <input
            type="text"
            placeholder="Search Businesses..."
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <input
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
