import React from "react";

const categories = [
  { id: 1, name: "Software Developer", image: "/Rojgar/SoftwareEngineer.jpg" },
  { id: 2, name: "Telecaler", image: "/Rojgar/Telecaler.jpg" },
  { id: 3, name: "IT Support", image: "/Rojgar/IT Support.jpg" },
  { id: 4, name: "Digital Marketing", image: "/Rojgar/Digital Marketing.jpg" },
  { id: 5, name: "Content Creator", image: "/Rojgar/Content Creator.jpg" },
  { id: 6, name: "Sales", image: "/Rojgar/Sales.jpg" },
  { id: 7, name: "Counsellor Creator", image: "/Rojgar/Counsellor.jpg" },
  { id: 8, name: "Accountant", image: "/Rojgar/Accountant.jpg" },
];

const RojgarCategory1 = () => {
  return (
    <div className="container mx-auto px-4 py-8">      
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

export default RojgarCategory1;
