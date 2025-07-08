import React from "react";

const categories = [
  { id: 1, name: "Comedy", image: "/InfluencerCategory/Comedy.jpg" },
  { id: 2, name: "Beauty-Products", image: "/InfluencerCategory/Beauty.jpg" },
  { id: 3, name: "Luxury Car Brand", image: "/InfluencerCategory/Car.jpg" },
  { id: 4, name: "Fitness", image: "/InfluencerCategory/Fitness.jpg" },
  { id: 5, name: "Motivational", image: "/InfluencerCategory/Motivation.jpg" },
  { id: 6, name: "Food", image: "/InfluencerCategory/Food.jpg" },
  { id: 7, name: "Travel", image: "/InfluencerCategory/Travel.jpg" },
  { id: 8, name: "Technology", image: "/InfluencerCategory/Technology.jpg" },
];

const CategoryShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-8">      
      <div className="overflow-x-auto px-4 px-md-0">
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
              <h3 className="text-sm font-semibold mt-2 text-center text-black">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
