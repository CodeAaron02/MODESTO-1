import Image from "next/image";
import React from "react";

export const Gallery = () => {
  const gallerys = [
    "/Gallery.jpg",
    "/Gallery1.jpg",
    "/Gallery2.jpg",
    "/Gallery3.jpg",
    "/Gallery4.jpg",
    "/Gallery5.jpg",
    "/Gallery6.jpg",
    "/Gallery7.jpg",
    "/Gallery8.jpg",
    "/Gallery9.jpg",
    "/Gallery10.jpg",
    "/Gallery11.jpg",
    "/Gallery12.jpg",
    "/Gallery13.jpg",
    "/Gallery14.jpg",
    "/Gallery15.jpg",
    "/Gallery16.jpg",
    "/Gallery17.jpg",
  ];

  return (
    <div
      id="gallery"
      className="max-w-[78rem] mx-auto py-20 px-3 min-h-[100dvh]"
    >
      <h1 className="text-4xl font-bold mb-10">
        GALLERY / <span className="text-green-500">IMAGES</span>
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
        {gallerys.map((gallery, idx) => (
          <div key={idx}>
            <Image
              src={gallery}
              alt="Gallery"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
