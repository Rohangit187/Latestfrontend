import React from 'react';

function PropertPopularProject() {
  const categories = [
    { id: 1, name: "Flats", image: "/Property/Flats.jpg", Type: "Flats" },
    { id: 2, name: "Duplex", image: "/Property/Duplex.jpg", Type: "Style" },
    { id: 3, name: "Plots", image: "/Property/Plots.jpg", Type: "Plots" },
    { id: 4, name: "Villa", image: "/Property/Villa.jpg", Type: "Villa" },
    { id: 5, name: "Commercial", image: "/Property/Commercial.jpg", Type: "Commercial" },
  ];

  return (
    <>
      <div className="text-center text-black font-extrabold text-2xl my-6">
        <h1>Popular Project</h1>
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
                <h2 className="text-lg font-bold flex items-center justify-between">
                  <span className="badge badge-secondary">NEW</span>
                </h2>
               {/* <p className="text-sm mt-2">New Project Starts On 2 Feb 2025</p>  */}
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

export default PropertPopularProject;
