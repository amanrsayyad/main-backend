import React, { useState } from "react";
import "./CovidHead.css";
import { Link } from "react-router-dom";

const CovidHead = () => {
  //scroll header logic
  const [covidNav, setCovidNav] = useState(false);

  const changeCovidBackground = () => {
    if (window.scrollY >= 100) {
      setCovidNav(true);
    } else {
      setCovidNav(false);
    }
  };

  window.addEventListener("scroll", changeCovidBackground);

  return (
    <div className={covidNav ? "head scroll" : "head"}>
      <div className="phone_head">
        <a href="tel:+917083277000">
        <i class="fa-solid fa-phone"></i> Phone: +91 94049 29492
        </a>
      </div>
      <div className="message_head">
        <Link to="/CovidUpdate">
          <p>WeAssure: Your wellbeing is our priority</p>
        </Link>
      </div>
      <div className="socail_head">
        <Link to="/">
          <i class="fab fa-instagram"></i> Instagram
        </Link>
        <a href="https://www.facebook.com/la.serene.33" target="_blank" rel="noreferrer">
          <i class="fab fa-facebook"></i> Facebook
        </a>
        <Link to="/">
          <i class="fab fa-youtube"></i> YouTube
        </Link>
      </div>
    </div>
  );
};

export default CovidHead;
