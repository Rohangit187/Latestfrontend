import React, { useState } from "react";
import axios from "axios";
import apiServices from "../Services/Api";

const CreateListing = () => {
  const [submitted, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    buildingName: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    mobileNumber: "",
    whatsappNumber: "",
    businessCategory: "",
    FacebookLink: "",
    InstagramLink: "",
    Description: "",
    frontImage: null,
    receptionImage: null,
    insideImage: null,
    menuPage1: null,
    menuPage2: null,
    menuPage3: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/);
    if (words.length <= 50) {
      setFormData((prev) => ({ ...prev, Description: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitted) {
      alert("✅ Business already listed.");
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const res = await axios.post(apiServices.businessCreate, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200 || res.status === 201) {
        alert("✅ Business Listed Successfully!");
        setSubmit(true);
        console.log("Server Response:", res.data);
      } else {
        alert("❌ Something went wrong.");
        console.error("Error Response:", res.data);
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("Server Error: Please try again.");
    }
  };

  return (
    <>
      {/* Responsive Banner */}
      <div className="w-full md:w-1/3 overflow-hidden md:hidden py-0">
        <img src="/BusinessCategory/BusinessSignupImage.jpg" alt="Background" className="w-full h-auto object-cover py-5" />
      </div>

      {/* Visible on medium and larger screens */}
      <div className="w-full h-full overflow-hidden hidden md:block ">
        <img src="/BusinessCategory/BusinessSignupImage.jpg" alt="Background" className="w-full h-full object-cover py-0" />
      </div>

      {/* Responsive Form */}
      <div className="w-full flex justify-center px-4 md:px-0 my-6 bg-white">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-800">
            📌 Business Free Registration
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* Input Fields */}
            <input type="text" name="businessName" placeholder="Business Name" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="email" name="businessEmail" placeholder="Business Email" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="buildingName" placeholder="Building / Plot Name" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="area" placeholder="Area / Locality" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="landmark" placeholder="Landmark" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="whatsappNumber" placeholder="WhatsApp Number (Optional)" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="businessCategory" placeholder="Business Category" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="FacebookLink" placeholder="Facebook Page (Optional)" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="InstagramLink" placeholder="Instagram Link (Optional)" onChange={handleChange} className="border p-3 rounded w-full bg-white" />

            {/* Description */}
            <textarea
              name="Description"
              placeholder="Business Description (Max 50 words)"
              value={formData.Description}
              onChange={handleDescriptionChange}
              className="border p-3 rounded w-full bg-white md:col-span-2"
              rows={3}
            />

            {/* File Uploads */}
            <label className="block text-sm font-medium md:col-span-2 text-black">Front View Image *</label>
            <input type="file" name="frontImage" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Reception Area Image *</label>
            <input type="file" name="receptionImage" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Inside Premises Image *</label>
            <input type="file" name="insideImage" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Menu / Service List Page 1</label>
            <input type="file" name="menuPage1" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Menu Page 2</label>
            <input type="file" name="menuPage2" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Menu Page 3</label>
            <input type="file" name="menuPage3" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted}
              className={`md:col-span-2 bg-blue-600 text-white p-3 rounded mt-4 transition ${
                submitted ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
            >
              {submitted ? "Already Submitted" : "Submit Business Information (Click Once Wait For 5 Seconds)"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateListing;
