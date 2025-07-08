import React from 'react';

function InfluencerReviewVideo() {
  const Review = [
    { id: 1, videoSrc: "/Feedback/DivineHomeo.mp4", title: "Homeopathy Doctor", description: "Satisfied client" },
    { id: 2, videoSrc: "/Feedback/PediaCareClinic.mp4", title: "Pediatric Doctor", description: "Satisfied client" },
    { id: 3, videoSrc: "/Feedback/Hariom.mp4", title: "Electric Vechile Dealer", description: "Satisfied client" },
    { id: 4, videoSrc: "/Feedback/Jindal.mp4", title: "Dentist", description: "Satisfied client" },
    { id: 5, videoSrc: "/Feedback/Ziba.mp4", title: "Physiotherapist", description: "Satisfied client" },
    { id: 6, videoSrc: "/Feedback/Yourphysio.mp4", title: "Physiotherapist", description: "Satisfied client" },
    { id: 7, videoSrc: "/Feedback/Unnatiphysio.mp4", title: "Physiotherapist", description: "Satisfied client" },
  ];

  return (
    <>
      <div className="text-center text-black font-extrabold text-2xl px-6 py-6">
        <h1>Client Feedback</h1>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {Review.map((client) => (
            <div
              key={client.id}
              className="min-w-[300px] bg-white shadow-xl rounded-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <figure className="w-full h-64 rounded-t-lg overflow-hidden">
                <video
                  src={client.videoSrc}
                  controls
                  muted
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="p-4">
                <h2 className=" text-lg font-semibold mb-2 text-black">Prestigous Client</h2>
                <p className="text-sm text-gray-600 mb-3">{client.description}</p>

                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="badge badge-outline text-cyan-700 font-medium">
                    <span className="font-bold">Category:</span> {client.title}
                  </span>
                  <span className="badge badge-outline text-cyan-700 hover:bg-cyan-100 transition">
                    Enquiry Now
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfluencerReviewVideo;
