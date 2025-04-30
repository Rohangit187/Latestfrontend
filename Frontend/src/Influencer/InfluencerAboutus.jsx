import React from 'react';
import InfluencerAboutusUsp from './InfluencerAboutusUsp';

function InfluencerAboutus() {
  return (
    <>
      {/* Mobile View Banner */}
      <div className="w-full md:hidden">
        <img
          src="/InfluencerCategory/AboutUsImage.jpg"
          alt="Banner"
          className="w-full h-60 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Desktop View Banner */}
      <div className="hidden md:block w-full">
        <img
          src="/InfluencerCategory/AboutUsImage.jpg"
          alt="Banner"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Additional Content */}
      <InfluencerAboutusUsp />
    </>
  );
}

export default InfluencerAboutus;

