import React from "react";
import "./Caro.css";
import Carousel from "react-bootstrap/Carousel";
import outdoor1 from "../../Assets/outdoor1.jpg";
import parking from "../../Assets/parking.jpg";
import outdoor from "../../Assets/outdoor.jpg";
import resto from "../../Assets/resto.jpg";
import superiorKing1 from "../../Assets/superiorKing1.jpg";

const Caro = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className="caro_up">
          <img className="d-block w-100 caro_img" src={outdoor1} alt="" />
          <div className="caro_word">
            <h2 className="caro_h2"><span>A TRYST WITH THE WILDERNESS</span></h2>
            <p className="caro_para">Exeperience Paradise On Earth</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src={parking} alt="" />
          <div className="caro_word">
            <h2 className="caro_h2">To Infinity & Beyond</h2>
            <p className="caro_para">Your Time To Escape</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src={outdoor} alt="" />
          <div className="caro_word">
            <h2 className="caro_h2">La Serene Resort & Spa</h2>
            <p className="caro_para">Resort In The Valley's</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src={resto} alt="" />
          <div className="caro_word">
            <h2 className="caro_h2">We Serve Fresh & Delicious Food</h2>
            <p className="caro_para food">Eat Away At Hunger</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100 caro_img" src={superiorKing1} alt="" />
          <div className="caro_word">
            <h2 className="caro_h2">Add A Splash Of Luxury</h2>
            <p className="caro_para">Experience The Best Life Can Offer</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caro;
