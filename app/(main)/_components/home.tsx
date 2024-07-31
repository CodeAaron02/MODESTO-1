"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

export const Home = () => {
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
    <div id="home">
      <Swiper
        loop={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="relative "
      >
        {gallerys.map((gallery, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <div
              style={{
                backgroundImage: `url(${gallery})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative min-h-[100dvh] after:absolute after:inset-0 after:bg-black/50"
            />
          </SwiperSlide>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 z-[100] px-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={500}
            priority
            className="w-36 h-36"
          />
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-center">
            MODESTO&apos;S FARM AND RESORT
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-base text-xs font-semibold text-center">
            &quot;A PLACE THAT WILL HELP YOU FIND HAPPINESS AND PEACE&quot;
          </p>
        </div>
      </Swiper>
    </div>
  );
};
