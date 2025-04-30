import React from 'react'

function SingleListing() {

    const categories = 
        {
          id: 1,
          BusinessName: "Hariom Electricxcsdcsc Motors toonga",
          image: "Listscscscing.jpg",
          Address: "Bassiscscscsc Road, near by Vrindavan Hotel, opposite Shri Ram Hotel, Toonga, Rajasthan 303302",
          MobileNumber: "86555519369615",
          Description: "Every day is a new chance to improve, grow, and get closer to your goals. Even small efforts...Here’s a 150-word piece of content on **travel**: --- Travel opens the door to unforgettable experiences and lasting memories. Whether it's the serene beaches of Bali, the historic streets of Rome, or the vibrant culture of Tokyo, every destination offers something unique. Exploring new places helps us break free from daily routines, broaden our perspectives, and connect with people from diverse backgrounds. It's not just about ticking places off a list—it's about the stories we collect, the food we try, the languages we hear, and the breathtaking sights we witness along the way. Travel teaches patience, adaptability, and appreciation for the world’s beauty. Whether you're a solo adventurer, a couple seeking romantic getaways, or a family planning fun escapes, traveling brings joy and growth. So pack your bags, step out of your comfort zone, and let the journey shape you. After all, the world is too big to stay in one place—and life is too short to stay still. --- Want it tweaked for a specific audience or platform?",
          whatsappNumber: '8619369615',
        }
  return (
    <>
    
    {categories.map((data) => (
        <div
          key={data.id}
          className="w-full h-64 hidden md:flex bg-slate-50 p-4 space-x-4 mb-4 rounded-lg"
        >
          {/* Image Section */}
          <div className="w-1/4 flex justify-start items-start">
            <img
              src={data.image}
              alt={data.BusinessName}
              className="w-full h-56 rounded-md object-fill"
            />
          </div>

          {/* Content Section */}
          <div className="w-5/12 flex flex-col justify-start items-start space-y-3">
  {/* Business Name */}
  <div className="flex items-center gap-3">
    <img src="/BrandName.jpg" alt="Business Icon" className="w-6 h-6 object-contain" />
    <p className="text-xl font-bold text-gray-800">{data.BusinessName}</p>
  </div>

  {/* Address */}
  <div className="flex items-center gap-3">
    <img src="/Location.jpg" alt="Location Icon" className="w-6 h-6 object-contain" />
    <p className="text-sm md:text-base text-gray-700 font-semibold">
      {data.Address}
    </p>
  </div>
  <div className="grid grid-cols-2 gap-3 w-full">
  {/* Phone */}
  <button className="btn btn-Primary w-full">Mobile No:{data.MobileNumber}</button>

  {/* WhatsApp #1 */}
  <a
    href={`https://wa.me/${data.whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-Primary w-full"
  >
    WhatsApp No: {data.whatsappNumber}
  </a>

  {/* WhatsApp #2 */}
  <a
    href={`https://wa.me/${data.whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-Primary w-full"
  >
  Faceook
  </a>

  {/* WhatsApp #3 */}
  <a
    href={`https://wa.me/${data.whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-Primary w-full"
  >
   Instagram
  </a>
</div>

</div>
{/* Description Section */}
         
          <div className="flex-1 flex flex-col justify-start items-start overflow-hidden font-bold">
            <h1>Abouts Us</h1>
            <p className="text-sm text-gray-700 leading-relaxed overflow-y-auto max-h-45 text-left pr-2">
              {data.Description || "No description available."}
            </p>
          </div>
        </div>
      ))}
    
    
    </>
  )
}

export default SingleListing
