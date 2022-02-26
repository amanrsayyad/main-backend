import React, { useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import spa from "../../Assets/spa.jpg";

const SpaSer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="spaser">
      <div>
        <h2 className="spaser_h2">Our Spa Services</h2>
        <div className="spaser_container">
          <div data-aos="fade-down" className="spaser_room">
            <div>
              <img src={spa} alt="" />
              <div className="opa_spaser opa"></div>
            </div>
            <div>
              <h3>Express</h3>
              <div className="spaser_border"></div>
              <li>
                <i class="far fa-star"></i> Feet Reflexology
              </li>
              <li>
                <i class="fas fa-hands-wash"></i> Hand Message
              </li>
              <li>
                <i class="fas fa-bed"></i> Facial Express
              </li>
              <li>
                <i class="far fa-clock"></i> 1 hours & 30 minutes
              </li>
              <Link to="/" class="link link--thebe anime_link spaser_btn">
                Book Now <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="spaser_room">
            <div>
              <img src={spa} alt="" />
              <div className="opa_spaser opa"></div>
            </div>
            <div>
              <h3>Detox</h3>
              <div className="spaser_border"></div>
              <li>
                <i class="far fa-star"></i> Native American Hot Stone
              </li>
              <li>
                <i class="fas fa-hands-wash"></i> Coffee Detox Skin Refinement
              </li>
              <li>
                <i class="fas fa-user-alt"></i> Champi
              </li>
              <li>
                <i class="far fa-clock"></i> 2 hours & 30 minutes
              </li>
              <Link
                to="/SuperiorKing"
                class="link link--thebe anime_link spaser_btn"
              >
                Book Now <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaSer;
