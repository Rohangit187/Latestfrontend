import React from "react";

const categories = [
  { id: 1, name: "Gaming", image: "/InfluencerCategory/Gaming.jpg" },
  { id: 2, name: "Clothing", image: "/InfluencerCategory/Clothing.jpg" },
  { id: 3, name: "Real-Estate", image: "/InfluencerCategory/Real Estate.jpg" },
  { id: 4, name: "Architect", image: "/InfluencerCategory/Architect.jpg" },
  { id: 5, name: "Club", image: "/InfluencerCategory/Club.jpg" },
  { id: 6, name: "Resturant & Cafe", image: "/InfluencerCategory/Restro & Lounge.jpg" },
  { id: 7, name: "Astrology", image: "/InfluencerCategory/Astrology.jpg" },
  { id: 8, name: "Finance", image: "/InfluencerCategory/Finance.jpg" },
];

const InfluencerCategoryTwo = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">      
      <div className="overflow-x-auto">
        <div className="grid grid-cols-8 gap-4 min-w-[800px]">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-3 rounded-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full shadow-lg object-cover">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-sm font-semibold mt-2 text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfluencerCategoryTwo;

