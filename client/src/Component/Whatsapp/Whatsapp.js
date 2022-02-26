import React from "react";
import "./Whatsapp.css";
import { Link } from "react-router-dom";
import wa from "../../Assets/wa.png";

const Whatsapp = () => {
  return (
    <div>
      {/* <div className="book_btn">
       <Link to="/">Book Now</Link> 
      </div> */}
      <div className="whatsapp_main">
        <a href="https://wa.me/919404929492" target="_blank" rel="noreferrer">
          <img src={wa} alt="" />
        </a>
      </div>
      <div className="feedback_form">
        <Link to="/Feedback">
          Valuable Feedback<i class="fas fa-comments"></i>
        </Link>
      </div>
    </div>
  );
};

export default Whatsapp;
