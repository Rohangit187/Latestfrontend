import React from 'react'
import { useLocation } from 'react-router-dom';

function PropertyImageDetailing() {
  const location = useLocation();
const { listingData } = location.state || {};
if (!listingData) {
  return (

   /* Desktop View */
  <div className="w-full text-center py-10">
      <h2 className="text-xl font-bold text-gray-800">Business details not found</h2>
    </div>
  );
}
  return (
   <>
    <div className="w-full h-80 overflow-hidden hidden md:flex gap-4 px-4">
        <div className="w-1/4 h-72">
          <img
            src={listingData.image1}

            alt="Rohan Singh"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="w-2/4 h-72">
          <img
            src={listingData.image2}
             alt="Rohan Singh"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="w-1/4 h-72">
          <img
            src={listingData.image3}
            alt="Rohan Singh"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      </div>
      {/* Mobile View */}
      <div className="w-full flex md:hidden overflow-x-auto space-x-4 px-4 py-4">
        <div className="min-w-[250px] h-60 flex-shrink-0">
          <img
            src={listingData.image1}
            alt="Front View"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="min-w-[250px] h-60 flex-shrink-0">
          <img
            src={listingData.image2}
            alt="Reception View"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="min-w-[250px] h-60 flex-shrink-0">
          <img
            src={listingData.image3}
            alt="Inside View"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      </div>
   
   
   </>
  )
}

export default PropertyImageDetailing
