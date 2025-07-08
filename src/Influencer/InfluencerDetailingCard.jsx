import React from 'react';
import { useLocation } from 'react-router-dom';

function InfluencerDetailingCard() {
  const location = useLocation();
  const { listingData } = location.state || {}; // Fallback to empty object if no state

  // If no data is passed, show a message or return a "not found" page
  if (!listingData) {
    return (
      <div className="w-full text-center py-10">
        <h2 className="text-xl font-bold text-gray-800">Influencer Not Find</h2>
      </div>
    );
  }

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden w-full px-2 py-4">
        <div className="bg-slate-50 p-4 rounded-lg shadow-md space-y-3 max-w-xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src={listingData.businessImage || '/EmployeeProfile.jpg'}
              alt="Business Icon"
              className="w-5 h-5 object-contain"
            />
            <p className="text-lg font-bold text-gray-800">{listingData.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-5 h-5 object-contain" />
            <p className="text-sm text-gray-700 font-medium">
             {listingData.pincode} {listingData.city} {listingData.state} {listingData.country}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-gray-50">
             {/*
            <button className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black">
             
              Mobile: {listingData.mobileNumber}
            </button>
            <a
              href={`https://wa.me/${listingData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              WhatsApp
            </a>
              */}
            <a
              href={listingData.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              Facebook
            </a>
            <a
              href={listingData.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              Instagram
            </a>
          </div>
          <div className='flex  flex-col font-extrabold text-zinc-600 font-mono'>
            <h1 >Facebook Follower :{listingData.fbFollower}</h1>
            <h1 className='content-end'>Instagram Follower:{listingData.instagramFollower} </h1>
            </div>
          <div>
            <h2 className="text-base font-semibold text-gray-800 mb-1">About Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed max-h-40 overflow-y-auto">
              {listingData.description|| 'No description available.'}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="w-full h-auto hidden md:flex bg-slate-50 p-4 space-x-4 mb-4 rounded-lg">
        <div className="w-5/12 flex flex-col justify-start items-start space-y-3">
          <div className="flex items-center gap-3">
            <img
              src={listingData.businessImage || '/EmployeeProfile.jpg'}
              alt="Business Icon"
              className="w-6 h-6 object-contain"
            />
            <p className="text-xl font-bold text-gray-800">{listingData.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-6 h-6 object-contain" />
            <p className="text-sm md:text-base text-gray-700 font-semibold">
           {listingData.city}   {listingData.pincode}   {listingData.state} {listingData.country}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            {/*
            <button className="btn btn-Primary w-full">
              Mobile No: {listingData.mobileNumber}
            </button>
            <a
              href={`https://wa.me/${listingData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full"
            >
              WhatsApp
            </a>
            */}
            <a
              href={listingData.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full bg-gray-100 text-black"
            >
              Facebook
            </a>
            <a
              href={listingData.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full bg-gray-100 text-black"
            >
              Instagram
            </a>
          </div>
          <div className='flex  flex-col font-extrabold text-zinc-600 font-mono'>
            <h1 >Facebook Follower :{listingData.fbFollower}</h1>
            <h1 className='content-end'>Instagram Follower:{listingData.instagramFollower} </h1>
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start overflow-hidden font-bold gap-y-2">
          <h1>About Us</h1>
          <p className="text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            {listingData.description || 'No description available.'}
          </p>
        </div>
      </div>
    </>
  );
}

export default InfluencerDetailingCard;
