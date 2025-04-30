import React from 'react';
import { Link } from 'react-router-dom';


const RojgarListingcard = ({data}) => {
  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden w-full px-2 py-4">
        <div className="bg-slate-50 p-4 rounded-lg shadow-md space-y-3 max-w-xl mx-auto">
          <div className="w-full">
            <img
              src={data.profileImage
              }
              alt={data.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="flex items-center gap-3">
            <img src="/EmployeeProfile.jpg" alt="Business Icon" className="w-5 h-5 object-contain" />
            <p className="textarea-md font-bold text-gray-800">{data.name}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-5 h-5 object-contain" />
            <p className="text-sm text-gray-700 font-medium">{data.area}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-gray-50">
            <button className="btn btn-btn-neutral w-full text-xs">
              Mobile:{data.phoneNumber}
            </button>
            <a
              href={`https://wa.me/${data.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm"
            >
              WhatsApp
            </a>
            {/*
            <a
              href={data.FacebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm"
            >
              Facebook
            </a>
            <a
              href={data.InstagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-btn-neutral w-full text-sm"
            >
              Instagram
            </a>
            */}
             </div>
             <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Email-Id: {data.email || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Qualification: {data.qualification || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Working Experience: {data.experience || "No description available."}-Years
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Current Company Name: {data.Currentcompanyname || "No description available."}
          </p>
             <div className='flex grid-flow-col gap-x-4 font-sans text-fuchsia-900 '>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
           <span className='text-fuchsia-900'> Skill 1: </span> {data.skill1 || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Skill 2: {data.skill2 || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
           Skill 3: {data.skill3 || "No description available."}
          </p>
          </div>
             
          </div>
    </div>

      {/* Desktop View */}
      <div className="w-full h-full hidden md:flex bg-slate-50 p-4 space-x-4 mb-4 rounded-lg">
        <div className="w-1/4 flex justify-start items-start">
          <img
            src={data.
              profileImage
              }
            alt={data.name}
            className="w-full h-56 rounded-md object-fill"
          />
        </div>
        <div className="w-5/12 flex flex-col justify-start items-start space-y-3">
          <div className="flex items-center gap-3">
            <img src="/EmployeeProfile.jpg" alt="Business Icon" className="w-6 h-6 object-contain" />
            <p className="text-xl font-bold text-gray-800">{data.name}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/Location.jpg" alt="Location Icon" className="w-6 h-6 object-contain" />
            <p className="text-sm md:text-base text-gray-700 font-bold"> {data.area} {data.pincode} {data.city}  {data.state} {data.country} </p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <button className="btn btn-Primary w-full">
              Mobile No: {data.phoneNumber}
            </button>
            <a
              href={`https://wa.me/${data.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full"
            >
              WhatsApp
            </a>
              {/*
            <a
              href={data.FacebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full"
            >
              Facebook
            </a>
          
            <a
              href={data.InstagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-Primary w-full"
            >
              Instagram
            </a>
              */}
          </div>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Email-Id: {data.email || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Qualification: {data.qualification || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Working Experience: {data.experience || "No description available."}-Years
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Current Company Name: {data.Currentcompanyname || "No description available."}
          </p>
          <div className='flex grid-flow-col gap-x-4 font-sans text-fuchsia-900 '>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
           <span className='text-fuchsia-900'> Skill-1: </span> {data.skill1 || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
            Skill-2: {data.skill2 || "No description available."}
          </p>
          <p className="textarea-md font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
           Skill-3: {data.skill3 || "No description available."}
          </p>
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

export default RojgarListingcard;






