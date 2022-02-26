import React, { useEffect } from "react";
import "./Offers.css";
import resto from "../../Assets/resto.jpg";
import superiorKing1 from "../../Assets/superiorKing1.jpg";
import spa from "../../Assets/spa.jpg";
import Footer from "../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <div class="offer_new">
        <div class="offer__content">
          <h1 className="animate-hero">Our Offers</h1>
        </div>
      </div>
      <div className="offer">
        <h1 className='center_offer'>Ongoing Offer</h1>
        {/* <h5 className="center_offer_tag">DISCOVER LA SERENE RESORT LIVING</h5> */}
        <div className="offer_container">
          <div data-aos="flip-up" className="offer_card">
            <div className="img_offer">
              <img src={resto} alt="" />
            </div>
            <div className="offer_content">
              <h2>Upto 15% savings on Restaurant</h2>
              <ul>
                <li>Hygenic Food</li>
                <li>Clean Enviroment</li>
                <li>Great Test</li>
              </ul>

              <button class="button button--mimas button_anime btn_offer">
                <span>Book Now</span>
              </button>
            </div>
          </div>
          <div data-aos="flip-up" className="offer_card">
            <div className="img_offer">
              <img src={superiorKing1} alt="" />
            </div>
            <div className="offer_content">
              <h2>Upto 30% Savings on Rooms and Suites Bookings</h2>
              <ul>
                <li>Luxaries condition</li>
                <li>3 Adults & 1 Children size</li>
                <li>Nature View</li>
              </ul>
              <button class="button button--hyperion button_anime btn_offer">
                <span>
                  <span>Book Now</span>
                </span>
              </button>
            </div>
          </div>
          <div data-aos="flip-up" className="offer_card">
            <div className="img_offer">
              <img src={spa} alt="" />
            </div>
            <div className="offer_content">
              <h2>Upto 30% savings on Spa Bookings</h2>
              <ul>
                <li>Relax Your Body</li>
                <li>Excelent Products Use</li>
                <li>Body Message</li>
              </ul>
              <button class="button button--greip button_anime btn_offer">
                <span>
                  <span>Book Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Offers;
