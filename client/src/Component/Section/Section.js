import React, { useEffect } from "react";
import "./Section.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Section = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="section">
      <div>
        <h2 className="sec_h2">Why choose us?</h2>
        <div className="section_container">
          <div data-aos="flip-down" className="section_card1 card_main">
            <div className="section_border">
              <h3>Best Value for Family</h3>
              <p>
              Your stay in La Serene Resorts will definitely take you one step closer to nature! While our comfortable rooms will keep you well rested, the real experience is in our surroundings. Take a long walk in the woods to meet some of our four-legged friends or follow the melody of the songbirds! Pack some light snacks and take our nature walk that leads you to our private waterfall inside the resort.
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="section_card2 card_main">
            <div className="section_border">
              <h3>Services Provided</h3>
              <p>
                <span>Luxury Spa to de-stress and unwind and a major attraction for guests who visit for rejuvenation.</span>
                <span>Swim With Nature's Stream</span>
                <span>We Serve Fresh & Delicious Food</span>
                <span>Blending natural colors and wooden furnishings, our rooms are designed to indulge you.</span>
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="section_card3 card_main">
            <div className="section_border">
              <h3>Certainly it's a scenic poetry</h3>
              <p>
                We are made for goodness. We are made for love...We are made for
                all of the beautiful things that you and I know. We are made to
                tell the world that there are no outsiders...all are welcome."
                'No matter what's wrong with you, you're welcome at this table
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="section_card4 card_main">
            <div className="section_border">
              <h3>Special Events</h3>
              <p>
              We have everything you need to rekindle your romance. Are you on your honeymoon or celebrating your anniversary? Perfect! Ask for the Executive Suite. Whisper a word to 
              our staff and we will plan a lovely candle light dinner for you in our gazebos. All you need to do is sit back and cherish the romantic evening with your loved one. 
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="section_card5 card_main">
            <div className="section_border">
              <h3>Comfort</h3>
              <p>
              Blending natural colors and wooden furnishings, our rooms are designed to indulge you. Spacious and well- ventilated, they are equipped with all modern amenities to make your stay comfortable. Enjoy a cup of tea, and look out at the stunning views from the balcony. If you need anything else, remember that our services are just a call away.
              </p>
            </div>
          </div>
          <div data-aos="flip-down" className="section_card6 card_main">
            <div className="section_border">
              <h3>Mission & Vision</h3>
              <p>
              La Serene Resort & Spa is a place where warm care and comfort
                of our guests is our highest mission. We pledge to create
                memorable experiences for Guests and meaningful opportunities
                for Team Members and Local Community Members.
              </p>
              <p>
                Sustainable and responsible growth through best environmental
                practices and wherein our staff at all levels consistently
                strive to exceed guest expectation under all circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
