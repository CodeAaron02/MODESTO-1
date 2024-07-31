"use client";

import Image from "next/image";
import React from "react";

export const Story = () => {
  return (
    <div
      id="story"
      className="flex lg:flex-row flex-col items-center max-w-[60rem] mx-auto py-20 px-3 min-h-[100dvh]"
    >
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-10 text-center">
          OUR <span className="text-green-500">STORY</span>
        </h1>

        <div className="space-y-5 text-center text-lg">
          <p>
            Here at Modesto&apos;s Farm and Resort, our journey started with a
            simple idea: to create a private getaway like no other. With a team
            dedicated to excellence and an unwavering commitment to our guests,
            we&apos;ve earned recognition that fuels our passion for providing
            exceptional experiences.
          </p>
          <p>
            Step into our world and discover the beauty that surrounds us. From
            lush landscapes to cozy accommodations, every corner is designed
            with your comfort in mind. Your presence is what makes our story
            come alive.
          </p>
          <p>
            As you dive into your stay with us, remember that our story is
            intertwined with yours. Your experiences shape our future, and
            we&apos;re here to make sure each moment feels perfect for you.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center shrink-0 flex-1">
        <Image
          src="/Coconut_tree1.png"
          alt="coconut-tree"
          width={500}
          height={500}
          priority
          className=""
        />
      </div>
    </div>
  );
};
