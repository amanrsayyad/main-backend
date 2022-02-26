import React from "react";
import "./Detail.css";
import "./new.css";
import { Link } from "react-router-dom";
import SuQueen from "../../Component/Profiles/SuQueen";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Component/Footer/Footer";
import superiorQueen from "../../Assets/superiorQueen.jpg";

const SuperiorQueen = (props) => {
  return (
    <div>
      <div class="superiorQueen_new">
        <div class="superiorQueen__content">
          <h1 className="animate-hero">Superior Queen Room</h1>
        </div>
      </div>
      <div className="detail">
        <div className="detail_container">
          <div>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100 roomd_img"
                  src={superiorQueen}
                  alt=""
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="detail_card">
            <div className="detail_heading">La Serene Resort & Spa</div>
            <div className="detail_features">
              <h5 className="detail_feature">Superior Queen Room</h5>
              <h4 className="h4_room">Size 27m2</h4>
              <h3 className="facilities">Most Popular Facilities :</h3>
              <ul className="feature">
                <li>
                  <Link to="/">
                    <i class="fas fa-parking"></i>Free Parking
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-users"></i>Family Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-wifi"></i>Free Wifi
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-utensils"></i>Restaurant
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-spa"></i>Spa & Wellnees Centre
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-concierge-bell"></i>Room Service
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i class="fas fa-coffee"></i>Cofee Maker All Rooms
                  </Link>
                </li>
              </ul>
              <div>
                <SuQueen />
              </div>
              <div className="detail_btn">
                <Link to="/">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuperiorQueen;
