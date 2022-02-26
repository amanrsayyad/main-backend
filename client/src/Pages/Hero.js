import React, { useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="flip-down" class="hero" id="home">
      <div class="hero__content">
        <h1 className="animate-hero">
          <i class="fas fa-concierge-bell"></i> Guest Reservations
        </h1>
        <p>Welcome To Paradise...Fun Never Stops</p>
        <Link to="/" className="button">
          Book Now <i class="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
