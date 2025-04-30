import React from 'react';

function PopularSearchCard() {
  const categories = [
    { id: 1, name: "Hotel", image: "/BusinessCategory/HotelSearches.jpg", Type: "Hotel" },
    { id: 2, name: "Real Estate Agent", image: "/BusinessCategory/RealesEstateSearch.jpg", Type: "Real Estate Agent" },
    { id: 3, name: "Physiotherepist", image: "/BusinessCategory/PhysioSearch.jpg", Type: "Physiotherapy" },
    { id: 4, name: "Club", image: "/BusinessCategory/ClubSearches.jpg", Type: "Club" },
    { id: 5, name: "Cafe", image: "/BusinessCategory/CafeandRestoSeacrh.jpg", Type: "Cafe" },
    { id: 6, name: "Hospital", image: "/BusinessCategory/HospitalSearch.jpg", Type: "Hospital" },
    { id: 7, name: "Gym", image: "/BusinessCategory/GymSeacrhes.jpg", Type: "Gym" },
  ];

  return (
    <>
      <div className="text-center text-black font-extrabold text-2xl my-6">
        <h1>Popular Searches</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((data) => (
            <div
              key={data.id}
              className="min-w-[300px] bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <figure className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-4">
            {/* <h2 className="text-lg font-bold flex items-center justify-between">
                  New Project
                  <span className="badge badge-secondary">NEW</span>
               
                <p className="text-sm mt-2">New Project Starts On 2 Feb 2025</p> </h2>*/}
                <div className="mt-6 flex flex-wrap justify-between items-center gap-3">
  <span className="badge badge-outline text-cyan-800 font-semibold bg-cyan-50 border-cyan-300 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="font-bold text-cyan-900">Category:</span> {data.name}
  </span>
  <span className="badge badge-outline text-gray-700 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 font-semibold transition-all duration-300 shadow-md cursor-pointer">
    Enquire Now
  </span>
</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PopularSearchCard;
