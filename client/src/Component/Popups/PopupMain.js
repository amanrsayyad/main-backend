import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import "./Popups.css";
import offerpng from "../../Assets/offerpng.png";
import Aos from "aos";
import "aos/dist/aos.css";

function PopupMain() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 10000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <Popup
      data-aos="flip-left"
      trigger={timedPopup}
      setTrigger={setTimedPopup}
      className="popup_container"
    >
      <div className="popup_container">
        <div>
          <img src={offerpng} alt="" className="popup_img" />
        </div>
        <div className="text_popup">
          <h3 className="h3_popup">Welcome to La Serene Resort & Spa</h3>
          <p className="offer_popup">
            upto <span>30%Off</span>
            <span className="none_popup">On Best Hotel Deal</span>
          </p>
          <p className="p_popup">
            Book the best hotel deals is live now book your room & enjoy your
            holidays.
          </p>
          <Link to="/" class="link link--thebe anime_link">
            Read More <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Popup>
  );
}

export default PopupMain;
