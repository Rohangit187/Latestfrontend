import React from "react";

const categories = [
  { id: 1, name: "Inventory Manager", image: "/Rojgar/Inventory Manager.jpg" },
  { id: 2, name: "Cashier", image: "/Rojgar/Cashier.jpg" },
  { id: 3, name: "Photographer ", image: "/Rojgar/Photographer.jpg" },
  { id: 4, name: "Receptionist", image: "/Rojgar/Receptionist.jpg" },
  { id: 5, name: "Housekeeping", image: "/Rojgar/Housekeeping.jpg" },
  { id: 6, name: "Driver", image: "/Rojgar/Driver.jpg" },
  { id: 7, name: "Technician", image: "/Rojgar/Technician.jpg" },
  { id: 8, name: "Security Guard", image: "/Rojgar/Security Guard.jpg" },
];

const RojgarCategory2 = () => {
  return (
    <div className="container mx-auto px-4 py-md-8">      
      <div className="ooverflow-x-auto px-4 px-md-0">
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

export default RojgarCategory2;

