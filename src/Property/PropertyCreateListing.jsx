import React, { useState } from "react";
import axios from "axios";
import apiServices from "../Services/Api";

const PropertyCreateListing = () => {
  const [submitted, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
  name: String,
  category:String,
  email: String,
  facebookLink: String,
  instagramLink: String,
  area:String,
  city: String,
  pincode: String,
  state: String,
  country: String,
  mobileNumber: String,
  whatsappNumber: String,
  description: String,
  price:String,
  size:String,
  profilePhoto: null,
  image1: null,
  image2: null,
  image3: null,
  image4: null,
  image5: null,
  image6: null,
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
      setFormData((prev) => ({ ...prev, description: value }));
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
      const res = await axios.post(apiServices.propertyCreate, form, {
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
        <img src="/Property/PropertySignupImage.jpg" alt="Background" className="w-full h-auto object-cover py-5" />
      </div>

      {/* Visible on medium and larger screens */}
      <div className="w-full h-full overflow-hidden hidden md:block ">
        <img src="/Property/PropertySignupImage.jpg" alt="Background" className="w-full h-full object-cover py-0" />
      </div>

      {/* Responsive Form */}
      <div className="w-full flex justify-center px-4 md:px-0 my-6 bg-white">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-800">
            📌 Start Posting Property , Its Free
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* Input Fields */}
            <input type="text" name="name" placeholder="Owner Name" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="category" placeholder="Enter Category - Flats/Plots/Comercial/PG" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="email" placeholder="Owner-Email" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="facebookLink" placeholder="Facebook-Link" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="instagramLink" placeholder="Instagtam-Link" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="area" placeholder="area" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="city" placeholder="City" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="mobileNumber" placeholder="Mobile-Number" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="whatsappNumber" placeholder="WhatsApp Number" onChange={handleChange} className="border p-3 rounded w-full bg-white" />
            <input type="text" name="price" placeholder="Price (Ex 34-48 Lac)" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />
            <input type="text" name="size" placeholder="Flat-Size(Ex 964-1783 Sqft)" onChange={handleChange} required className="border p-3 rounded w-full bg-white" />

            {/* Description */}
            <textarea
              name="description"
              placeholder="More About Projects Including Amenties (Max -100 Words)"
              value={formData.description}
              onChange={handleDescriptionChange}
              className="border p-3 rounded w-full bg-white md:col-span-2"
              rows={3}
            />

            {/* File Uploads */}
            <label className="block text-sm font-medium md:col-span-2 text-black">Project(Front Photo)*</label>
            <input type="file" name="profilePhoto" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black"> Flat(Hall-Image) / Plot(Image1) / Commercial(Image1) / Pg(Image1)</label>
            <input type="file" name="image1" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black"> Flat(Room-Image) / Plot(Image2) / Commercial(Image2) / Pg(Image2)</label>
            <input type="file" name="image2" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Flat(Kitchen-Image) / Plot(Image3) / Commercial(Image3) / Pg(Image3)</label>
            <input type="file" name="image3" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black"> Amenties Images1)</label>
            <input type="file" name="image4" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Amenties Images2  / Commercial(Image3) / Pg(Image3)</label>
            <input type="file" name="image5" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
            <label className="block text-sm font-medium md:col-span-2 text-black">Amenties Images3</label>
            <input type="file" name="image6" onChange={handleFileChange} className="border p-2 rounded w-full md:col-span-2" />
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

export default PropertyCreateListing;
