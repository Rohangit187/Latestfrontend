import React from "react";

const categories = [
  { id: 1, name: "Hospitals", image: "/BusinessCategory/Hospital.jpg" },
  { id: 2, name: "Estate and Agent", image: "/BusinessCategory/RealEstate.jpg" },
  { id: 3, name: "Event Organizer", image: "/BusinessCategory/Event.jpg" },
  { id: 4, name: "School", image: "/BusinessCategory/School.jpg" },
  { id: 5, name: "Dentist", image: "/BusinessCategory/Dentist.jpg" },
  { id: 6, name: "Packers and Movers", image: "/BusinessCategory/Packers.jpg" },
  { id: 7, name: "Coaching", image: "/BusinessCategory/Coaching.jpg" },
  { id: 8, name: "Interior Designer", image: "/BusinessCategory/Interior.jpg" },
];

const CategoryShowcasetwo = () => {
  return (
    <div className="container mx-auto px-4 py-md-8">      
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

export default CategoryShowcasetwo;

