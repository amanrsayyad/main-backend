import React, { useEffect } from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="service">
      <div>
        <div className="service_container">
          <div data-aos="fade-down" className="card_service">
            <i class="fas fa-utensils"></i>
            <h3>Restaurant</h3>
            <p>
              An Transperent glass restaurant that specializes in live sea food,
              barbecue, grills, sizzlers, slow fire cooking and Mediterranean
              cuisine which includes Italian, Greek and Lebanese cuisine.
            </p>
          </div>
          <div data-aos="fade-down" className="card_service">
            <i class="fas fa-bed"></i>
            <h3>Accomodations</h3>
            <p>
              Accomodations ideal for party and holidays.Special rooms,
              including a Swimming pool ,Game room ,Baeutiful Nature & Spa.
            </p>
          </div>
          <div data-aos="fade-down" className="card_service">
            <i class="fas fa-tram"></i>
            <h3>Tourist Sites</h3>
            <p>
              Mahabaleshwar is full of nature it has many tourist destinations
              like Pachgani ,Elephant's Head Point ,Chinaman's fall ,Dhobi
              Waterfall ,Arthur Seat ,etc.
            </p>
          </div>
          <div data-aos="fade-down" className="card_service">
            <i class="fas fa-spa"></i>
            <h3>Spa & Wellness</h3>
            <p>
              Spa & Wellness is the perfect escape to tranquility and relaxation
              where guests can pamper themselves.Ayurveda physicians and
              Panchakarma specialists.
            </p>
          </div>
          {/* <div className="card_service">
                    <i class="fas fa-coffee"></i>
                    <h3>Cafe</h3>
                    <p>Charming and contemporary, this coffee shop and restaurant meets your cravings for Indian, Continental, Pub snacks and live cooking featuring sumptuous national and international cuisine</p>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
