import Image from "next/image";
import React from "react";

export const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="max-w-[75rem] mx-auto py-20 px-3 min-h-[100dvh]"
    >
      <h1 className="text-5xl font-bold mb-7">
        ABOUT <span className="text-green-500">US</span>
      </h1>

      <div className="flex lg:flex-row flex-col items-center gap-12">
        <div className="shrink-0">
          <Image
            src="/bannerground.jpg"
            alt="Banner_ground"
            width={500}
            height={500}
            priority
            className="rounded-2xl w-full"
          />
        </div>

        <div className="flex items-center justify-center">
          <p className="space-y-5 text-xl">
            The{" "}
            <span className="text-green-500">Modesto&apos;s Farm & Resort</span>{" "}
            is owned by Rowena Mendoza Aguado and opened for business on January
            6, 2023. Located in Balete, Batangas City, Brgy. Sitio 2 Sahingan,
            and we offers a variety of activities. We started it as a simple
            get-together place, but we managed to make it this big to make our
            dearest customers satisfy their needs.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col items-center justify-center gap-12 mt-20">
        <div className="shrink-0">
          <Image
            src="/owner.jpg"
            alt="Owner"
            width={500}
            height={500}
            priority
            className="w-[25rem] h-[30rem]"
          />
        </div>

        <div>
          <p className="max-w-[30rem] text-2xl font-bold">
            This is{" "}
            <span className="text-green-500">Rowena Mendoza Aguado</span>. The
            owner of the{" "}
            <span className="text-green-500">
              Modesto&apos;s Farm and Resort
            </span>
            . Ma&apos;am Rowena is 30yrs old.
          </p>
        </div>
      </div>
    </div>
  );
};
