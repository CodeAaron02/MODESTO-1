import React from "react";
import { Home } from "./_components/home";
import { Story } from "./_components/story";
import { AboutUs } from "./_components/about-us";
import { Gallery } from "./_components/gallery";
import { ContactUs } from "./_components/contact-us";

const HomePage = () => {
  return (
    <div>
      <Home />
      <Story />
      <AboutUs />
      <Gallery />
      <ContactUs />
    </div>
  );
};

export default HomePage;
