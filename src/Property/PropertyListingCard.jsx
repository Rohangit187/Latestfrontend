import React from 'react';
import { Link } from 'react-router-dom';


const PropertyListingCard = ({data}) => {
  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden w-full px-2 py-4">
        <div className="bg-slate-50 p-4 rounded-lg shadow-md space-y-3 max-w-xl mx-auto">
          <div className="w-full">
            <img
              src={data.profilePhoto}
              alt={data.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="flex items-center gap-3">
            <img src="/PropertyBuilderImage.jpg" alt="Business Icon" className="w-5 h-5 object-contain" />
            <p className="text-lg font-bold text-gray-800"><Link to="/Property/detail/page" state={{listingData:data }}>{data.name}</Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-5 h-5 object-contain" />
            <p className="text-sm text-gray-700 font-medium">{data.area}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-gray-50">
            <button className="btn btn-btn-neutral w-full text-xs bg-gray-100 text-black">
              Mobile:{data.mobileNumber}
            </button>
            <a
              href={`https://wa.me/${data.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              WhatsApp
            </a>
            <a
              href={data.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              Facebook
            </a>
            <a
              href={data.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm  bg-gray-100 text-black"
            >
              Instagram
            </a>
          </div>
          <div className='flex  flex-col font-extrabold text-zinc-600 font-mono'>
            <h1 >Flat-Sizes :{data.size}</h1>
            <h1 className='content-end'>Flat-Prices :{data.price} </h1>
            </div>
          </div>
      </div>

      {/* Desktop View */}
      <div className="w-full h-64 hidden md:flex bg-slate-50 p-4 space-x-4 mb-4 rounded-lg">
        <div className="w-1/4 flex justify-start items-start">
          <img
            src={data.profilePhoto}
            alt={data.name}
            className="w-full h-56 rounded-md object-fill"
          />
        </div>
        <div className="w-5/12 flex flex-col justify-start items-start space-y-3">
          <div className="flex items-center gap-3">
            <img src="/PropertyBuilderImage.jpg" alt="Business Icon" className="w-6 h-6 object-contain" />
            <p className="text-xl font-bold text-gray-800"><Link to="/Property/detail/page" state={{listingData:data }}>{data.name}</Link></p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-6 h-6 object-contain" />
            <p className="text-sm md:text-base text-gray-700 font-semibold">{data.area}  {data.landmark} {data.pincode}   {data.city}  {data.state} {data.country} </p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <button className="btn btn-Primary w-full bg-gray-100 text-black">
              Mobile No: {data.mobileNumber}
            </button>
            <a
              href={`https://wa.me/${data.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full bg-gray-100 text-black"
            >
              WhatsApp
            </a>
            <a
              href={data.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full bg-gray-100 text-black"
            >
              Facebook
            </a>
            <a
              href={data.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full bg-gray-100 text-black"
            >
              Instagram
            </a>
            <div className='flex  flex-col font-extrabold text-zinc-600 font-mono'>
            <h1 >Flat-Sizes :{data.size}</h1>
            <h1 className='content-end'>Flat-Prices :{data.price} </h1>
            </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start overflow-hidden font-bold">
          <h1>About Us</h1>
          <p className="text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            {data.description || "No description available."}
          </p>
        </div>
      </div>
    </>
  );
};

export default PropertyListingCard;
