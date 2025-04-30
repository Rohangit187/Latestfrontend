import React from "react";

function InfluencerContactForm() {
  return (
    <>
      {/* Visible ONLY on small screens (mobile) */}
      <div className="w-full h-80 flex md:hidden flex-col justify-self-auto px-2 py-2">
        {/* Left Side */}
        <div>
          <h1 className="py-3 font-bold text-3xl"> Enquiry Form</h1>
        </div>
        <div className="py-2 flex-col space-y-2">
        <input type="text" placeholder="Enter Name" className="input py-2" />
        <input type="text" placeholder="Enter Mobile Number" className="input py-5" />
        <input type="text" placeholder="Tell Us About Service" className="input py-5"/>
        <button className="btn btn-secondary w-32 py-3 dropdown-hover">Submit</button>
        </div>
         </div>
    {/* Visible ONLY on md and larger screens */}
      <div className="w-full h-80 hidden md:flex">
  {/* Left Side */}
  <div className="w-1/2 bg-gray-50 flex items-center justify-center h-80 p-4">
    <h1 className="hidden lg:block text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500 
                   text-center break-words text-wrap max-w-[90%] animate-fade-in">
      We believe in providing the <span className="text-gray-900">best service</span> on time.  
      We never break the trust of our <span className="underline decoration-wavy decoration-fuchsia-400">Customer</span> and business owners.  
      <br />
      <span className="italic text-gray-600">No need to worry</span>—please fill out the enquiry form and let us  
      know the kind of services you need or any other assistance required from our side.  
      <br />
      <span className="text-yellow-500">Our team will coordinate with you promptly.</span>
    </h1>
  </div>


        {/* Right Side */}
        <div className="w-1/2 bg-gray-50 flex flex-col items-center justify-center h-80">
        <div>
          <h1 className=" font-bold text-3xl py-3"> Enquiry Form</h1>
        </div>
        <div className="py-2  flex flex-col space-y-1 w-full max-w-xs">
        <input type="text" placeholder="Enter Name" className="input py-2" />
        <input type="text" placeholder="Enter Mobile Number" className="input py-5" />
        <input type="text" placeholder="Brief About Services" className="input py-5"/>
        <button className="btn btn-secondary w-32 py-3 dropdown-hover space-y-3 ">Send Enquiry</button>
        </div>        
        </div>
      </div>
    </>
  );
}

export default InfluencerContactForm;
