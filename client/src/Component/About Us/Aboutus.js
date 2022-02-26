import React, { useEffect } from "react";
import "./Aboutus.css";
import Hero from "../../Pages/Hero";
import Footer from "../Footer/Footer";
import GridAbout from "./GridAbout";
import Aos from "aos";
import "aos/dist/aos.css";
import SvgAbout from "./SvgAbout";

const Aboutus = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  return (
    <div className="about">
      <div class="about_new">
        <div class="about__content">
          <h1 className="animate-hero">About Us</h1>
        </div>
      </div>
      <SvgAbout />
      <GridAbout />
      <Hero />
      <Footer /> 
    </div>
  );
};

export default Aboutus;
