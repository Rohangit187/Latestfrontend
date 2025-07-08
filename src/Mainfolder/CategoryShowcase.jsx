import React from "react";

const categories = [
  { id: 1, name: "Hotel", image: "/BusinessCategory/Hotel.jpg" },
  { id: 2, name: "Saloon", image: "/BusinessCategory/Saloon.jpg" },
  { id: 3, name: "Home & Kitchen", image: "/BusinessCategory/Kitchen.jpg" },
  { id: 4, name: "Gym", image: "/BusinessCategory/Gym.jpg" },
  { id: 5, name: "Cafe and Lounge", image: "/BusinessCategory/Cafe.jpg" },
  { id: 6, name: "Toys", image: "/BusinessCategory/Toy.jpg" },
  { id: 7, name: "Sweet Shop", image: "/BusinessCategory/Sweet.jpg" },
  { id: 8, name: "Resturant", image: "/BusinessCategory/Resturant.jpg" },
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
