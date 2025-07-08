import React from "react";

const RojgarUspData = () => {
  return (
    <>
      <div className="px-5  py-5  text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-600 font-bold mb-4">
          Your ultimate destination for discovering Your Dream Job, near you—anywhere in India
        </h1>
        </div>
       <div className="px-6 text-left bg-gray-50 rounded-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-600 font-bold mb-md-6">
          How Our Services Are Beneficial for You
        </h2>

        {/* Business Listing */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-2">📌Employee Free Listing</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Free Job Seeker Signup empowers unemployed individuals to boost their visibility, 
          connect with potential employers, and build credibility </p>
        </div>

        {/* Influencer Profile */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-2">📌 Influencer Profile</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            Influencers can create their profiles, allowing brands to find and connect with them. Our team helps facilitate communication for smooth collaborations. This portal supports both business and influencer profiles together.
          </p>
        </div>

        {/* Rojgar */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-2">📌 Rojgar</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            This portal connects job seekers and businesses. Employers can post job opportunities while seekers can view, apply, and connect directly with businesses for employment.
          </p>
        </div>

        {/* News */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-black mb-2">📌Brand Collobration</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
          We offer an exceptional platform that connects brands with influencers for seamless brand collaborations. Every brand has a 
          dedicated profile on our portal, showcasing their identity and partnership opportunities. This allows influencers to explore and 
          connect with brands that align with their niche. On the other side, companies can directly approach potential collaborators or 
          employees by searching profiles based on specific skills. Our portal bridges the gap between brands and talent, 
          making collaborations more accessible, efficient, and impactful          </p>
        </div>

        {/* Property */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-black mb-2">📌 Property</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700">
            This feature enables builders and property dealers to create free listings, highlight projects, and share contact details. Buyers can easily explore and connect with sellers across India.
          </p>
        </div>
      </div>
    </>
  );
};

export default RojgarUspData;
