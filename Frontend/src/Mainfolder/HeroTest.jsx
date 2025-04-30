import React, { useState } from 'react';

const HeroTest = () => {
  const [selectedHeroTest, setSelectedHeroTest] = useState(null);

  const handleClick = () => {
    setSelectedHeroTest('HeroTest Title');
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
      >
        <h2 className="text-lg font-bold">HeroTest Title</h2>
        <p className="text-sm text-gray-600">Click anywhere on this HeroTest</p>
      </div>

      {selectedHeroTest && (
        <div className="mt-4 text-green-600 font-semibold">
          Selected HeroTest: {selectedHeroTest}
        </div>
      )}
    </div>
  );
};

export default HeroTest;


