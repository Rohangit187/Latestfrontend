import React from "react";

function ForBusinessBanner() {
  return (
    <>
      {/* Visible on small screens (mobile only) */}
      <div className="w-full md:w-1/3 overflow-hidden md:hidden py-0">
        <img src="/InfluencerCategory/ForBusiness.jpg" alt="Testing" className="w-full h-auto object-cover py-5" />
      </div>

      {/* Visible on medium and larger screens */}
      <div className="w-full h-full overflow-hidden hidden md:block ">
        <img src="/InfluencerCategory/ForBusiness.jpg" alt="Testing" className="w-full h-full object-cover py-0" />
      </div>
    </>
  )
}

export default ForBusinessBanner;