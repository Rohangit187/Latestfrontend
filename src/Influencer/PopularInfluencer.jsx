import React from 'react';

function PopularInfluencer() {
  const categories = [
    { id: 1, name: "Electronics", image: "Reception.png", Type: "Electronic" },
    { id: 2, name: "Fashion", image: "Reception.png", Type: "Style" },
    { id: 3, name: "Home & Kitchen", image: "Reception.png", Type: "RealState" },
    { id: 4, name: "Sports", image: "Reception.png", Type: "Sports" },
    { id: 5, name: "Beauty", image: "Reception.png", Type: "RealState" },
    { id: 6, name: "Toys", image: "Reception.png", Type: "RealState" },
    { id: 7, name: "Books", image: "Reception.png", Type: "RealState" },
    { id: 8, name: "Automotive", image: "Reception.png", Type: "RealState" },
  ];

  return (
    <>
      <div className="text-center text-black font-extrabold text-2xl my-6">
        <h1>Popular Influencer</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((data) => (
            <div
              key={data.id}
              className="min-w-[300px] bg-base-100 shadow-xl rounded-lg hover:scale-105 transition-transform cursor-pointer bg-white"
            >
              <figure className="w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="p-4">
                <h2 className="text-lg font-bold flex items-center justify-between">
                  New Project
                  <span className="badge badge-secondary">NEW</span>
                </h2>
                <p className="text-sm mt-2">New Project Starts On 2 Feb 2025</p>
                <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
                  <span className="badge badge-outline text-cyan-700 font-semibold">
                    <span className="font-bold">Category:</span> {data.Type}
                  </span>
                  <span className="badge badge-outline text-cyan-700 hover:bg-cyan-100 transition">
                    Enquiry Now
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

export default PopularInfluencer;
