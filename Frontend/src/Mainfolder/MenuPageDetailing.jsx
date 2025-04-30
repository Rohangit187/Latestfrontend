import React from 'react';
import { useLocation } from 'react-router-dom';

function MenuPageDetailing() {
  const location = useLocation();
const { listingData } = location.state || {};
return (
    <>
     {/* Visible on small screens (mobile only) */}
     <div className="w-full h-80 overflow-x-auto md:hidden flex md:flex-row space-x-4 md:space-x-4 px-4">
      {/* Container is scrollable on small screens and flexes on md+ */}
      <div className="min-w-[250px] h-60 flex-shrink-0">
        <h1 className="text-lg font-semibold mb-2">Service Page 1</h1>
        <img
          src={listingData.menuPage1}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-cover"
        />
      </div>
      <div className="min-w-[250px] h-60 flex-shrink-0">
        <h1 className="text-lg font-semibold mb-2">Service Page 2</h1>
        <img
          src={listingData.menuPage2}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-cover"
        />
      </div>
      <div className="min-w-[250px] h-60 flex-shrink-0">
        <h1 className="text-lg font-semibold mb-2">Service Page 2</h1>
        <img
          src={listingData.menuPage3}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-cover"
        />
      </div>
      {/* Add more items as needed */}
    </div>

    <div className="w-full h-80 overflow-hidden hidden md:flex space-x-8">
      {/* Visible on medium and larger screens */}
      <div className="w-1/4 h-60 px-2">
        <h1 className="text-lg font-semibold mb-2">Service Page 1</h1>
        <img
          src={listingData.menuPage1}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-fill"
        />
      </div>
      <div className="w-1/4 h-60">
        <h1 className="text-lg font-semibold mb-2">Service Page 2</h1>
        <img
          src={listingData.menuPage2}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-fill"
        />
      </div>
      <div className="w-1/4 h-60">
        <h1 className="text-lg font-semibold mb-2">Service Page 3</h1>
        <img
          src={listingData.menuPage3}
          alt="Rohan Singh"
          className="w-full h-56 rounded-md object-fill"
        />
      </div>
    </div>
    </>
    
  );
}

export default MenuPageDetailing;
