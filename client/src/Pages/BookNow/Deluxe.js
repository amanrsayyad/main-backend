import React from "react";
import "./Detail.css";
import "./new.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Component/Footer/Footer";
import { DeluxeData } from "../../data/DeluxeData";
import DeProfile from "../../Component/Profiles/DeProfile";
import deluxe1 from "../../Assets/deluxe1.JPG";
import deluxe2 from "../../Assets/deluxe2.JPG";
import deluxe3 from "../../Assets/deluxe3.jpg";

const Deluxe = () => {
  return (
    <div>
      <div class="deluxe_new">
        <div class="deluxe_content">
          <h1 className="animate-hero">Deluxe Room</h1>
        </div>
      </div>
      <div className="detail">
          <div className="detail_container">
          <div>
          <Carousel fade>
               <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe1}
                 alt=""
               />
             </Carousel.Item>
 
             <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe2}
                 alt=""
               />
             </Carousel.Item>
 
             <Carousel.Item>
               <img
                 className="d-block w-100 roomd_img"
                 src={deluxe3}
                 alt=""
               />
             </Carousel.Item>  
          </Carousel>
        </div>
        <div className="detail_card">
          <div className="detail_heading">La Serene Resort & Spa</div>
          <div className="detail_features">
            {DeluxeData.map((item)=> (
                <>
                <h5 className="detail_feature">{item.room}</h5>
                <h4 className="h4_room">Size {item.size}</h4>
                </>
            ))}
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
            <DeProfile />
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

export default Deluxe;
