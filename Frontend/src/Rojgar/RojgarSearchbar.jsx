import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RojgarSearchbar() {
  const [employeeCategory, setemployeeCategory] = useState('');
  const [area, setarea] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!employeeCategory || !area) return;
    console.log(employeeCategory);
    console.log(area);

    navigate('/rojgar/listing/all', {
      state: {
        employeeCategory,
        area,
      },
    });
  };
   return (
    <>
      {/* Mobile View */}
      <div className="w-full md:hidden px-4">
        <div className="bg-white shadow-md rounded-lg p-3 flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Search Employee Category (Ex- Engineer, SalesMan, Receptionist) ..."
            value={employeeCategory}
            onChange={(e) => setemployeeCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Area...(Ex- pratap nagar, Malviya nagar)"
            value={area}
            onChange={(e) => setarea(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <div className="hidden md:flex justify-center py-4">
        <div className="bg-gray-100 shadow-lg rounded-lg p-3 flex space-x-3 w-3/5">
          <input
            type="text"
            placeholder="Search Employee Category (Ex- Engineer)"
            value={employeeCategory}
            onChange={(e) => setemployeeCategory(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter Area"
            value={area}
            onChange={(e) => setarea(e.target.value)}
            className="w-1/4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default RojgarSearchbar;





