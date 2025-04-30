import React from 'react';

function InfluencerPopularBrands() {
  const categories = [
    { id: 1, name: "Your Physio", image: "/InfluencerCategory/YourPhysio.jpg", Type: "PhysioTherapy Equipments" },
    { id: 2, name: "Indi EV Vechile", image: "/InfluencerCategory/IndiElectric.jpg", Type: "EV Vechile Manufacture" },
    { id: 3, name: "TVS", image: "/InfluencerCategory/TVS.jpg", Type: "Automobile" },
    { id: 4, name: "Kinetic Green EV", image: "/InfluencerCategory/KineticGreen.jpg", Type: "EV Vechile Manufacture" },
    { id: 5, name: "Clinic And Homepathy Medicine SUpplier", image: "/InfluencerCategory/DivineHomeo.jpg", Type: "Homepathy Medicine Provider" },
    { id: 6, name: " Redhawk School", image: "/InfluencerCategory/Redhawk.jpg", Type: "School" },
   ];

  return (
    <>
      <div className="text-center text-black font-extrabold text-2xl my-6">
        <h1>Popular Brands</h1>
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
                  New Brands
                  <span className="badge badge-secondary">NEW</span>
                </h2>
             
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

export default InfluencerPopularBrands;
