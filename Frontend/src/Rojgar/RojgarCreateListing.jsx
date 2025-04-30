import React, { useState } from "react";
import axios from "axios";

const RojgarCreateListing = () => {
  const [submitted, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    skill1: "",
    skill2: "",
    skill3: "",
    area:"",
    city: "",
    pincode: "",
    state: "",
    country: "",
    employeeCategory: "",
    description: "",
    experience:"",
    qualification:"",
    Currentcompanyname:"",
    profileImage: null,
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
      const res = await axios.post("https://api-nav.navsankalp.com/api/employee/create", form, {
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
        <img src="/Rojgar/JobSignupImage.jpg" alt="Background" className="w-full h-auto object-cover py-5" />
      </div>

      {/* Visible on medium and larger screens */}
      <div className="w-full h-full overflow-hidden hidden md:block ">
        <img src="/Rojgar/JobSignupImage.jpg" alt="Background" className="w-full h-full object-cover py-0" />
      </div>

      {/* Responsive Form */}
      <div className="w-full flex justify-center px-4 md:px-0 my-6">
        <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-blue-800">
            📌 Start Your Career Journey – Sign Up Free!
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* Input Fields */}
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="whatsappNumber" placeholder="Whatsapp Number" onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="skill1" placeholder="Skill 1" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="skill2" placeholder="Skill 2" onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="skill3" placeholder="Skill 3" onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="area" placeholder="Current Address(Area)" onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="city" placeholder="City" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="employeeCategory" placeholder="Write Catrgory (Ex-Engineer , Security Card, Housekeeping" onChange={handleChange} required className="border p-3 rounded w-full" />
            <input type="text" name="experience" placeholder="How many Year Of Experience " onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="qualification" placeholder="Last Degree / Last Qualification Ex- B-Tech , B-Come , 12 Class " onChange={handleChange} className="border p-3 rounded w-full" />
            <input type="text" name="Currentcompanyname" placeholder="Last Company Name / Last Store/Shop Name" onChange={handleChange} className="border p-3 rounded w-full" />

            {/* Description */}
            <textarea
              name="description"
              placeholder="Business Description (Max 50 words)"
              value={formData.description}
              onChange={handleDescriptionChange}
              className="border p-3 rounded w-full md:col-span-2"
              rows={3}
            />

            {/* File Uploads */}
            <label className="block text-sm font-medium md:col-span-2"> Proffessional Profile Picture *</label>
            <input type="file" name="profileImage" onChange={handleFileChange} required className="border p-2 rounded w-full md:col-span-2" />
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

export default RojgarCreateListing;
