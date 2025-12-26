import React from "react";
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    title: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    title: "Project Planning",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    title: "Office Discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title: "Creative Session",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Team Strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Work Culture",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#ECFDF5] px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#166534]">
            Gallery
          </h2>
          <p className="text-gray-600 mt-1">
            Moments captured from our events and activities
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;