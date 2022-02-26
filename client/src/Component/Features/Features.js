import React, { useEffect } from "react";
import "./Features.css";
import pool1svg from "../../Assets/pool1svg.svg";
import parkingsvg from "../../Assets/parkingsvg.svg";
import roomsvg from "../../Assets/roomsvg.svg";
import wifi2 from "../../Assets/wifi2.svg";
import restosvg from "../../Assets/restosvg.svg";
import spasvg from "../../Assets/spasvg.svg";
import clean from "../../Assets/clean.svg";
import tea from "../../Assets/tea.svg";
import gamesvg from '../../Assets/gamesvg.svg';
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="service_bg">
    <div className="services">
      <h1 class="animate-skill">Amenities</h1>
      <div className="services_container">
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={pool1svg} alt="" />
            <h3>Swimming pool</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={wifi2} alt="" className="wifi_img" />
            <h3>High-Speed WiFi</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={roomsvg} alt="" />
            <h3>Family Rooms</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={clean} alt="" />
            <h3>24/7 Room service</h3>
          </div>
        </div>
      </div>
      <div className="services_container">
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={restosvg} alt="" />
            <h3>Restaurant</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={spasvg} alt="" />
            <h3>Spa</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={gamesvg} alt="" className="wifi_img" />
            <h3>Game Zone</h3>
          </div>
        </div>
        <div data-aos="flip-left" className="services_card">
          <div class="services__title">
            <img src={parkingsvg} alt="" />
            <h3>Free Parking</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
