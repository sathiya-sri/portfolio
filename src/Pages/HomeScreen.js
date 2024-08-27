import React from "react";
import Banner from "../components/Banner/Banner.js";
import HomeProjects from "../components/HomeProjects/HomeProjects.js";
import Services from "../components/Services/Services.js";
import Testimonial from "../components/Testimonial/Testimonial.js";
const HomeScreen = () => {
  return (
    <section>
      <Banner />
      <HomeProjects />
      <Services />
      <Testimonial />
    </section>
  );
};

export default HomeScreen;
