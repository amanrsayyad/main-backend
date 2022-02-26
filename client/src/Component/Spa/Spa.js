import React, { useEffect } from "react";
import "./Spa.css";
import SpaSer from "../utils/SpaSer";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import spa1 from "../../Assets/spa1.jpg";
import spa2 from "../../Assets/spa2.jpg";
import spa3 from "../../Assets/spa3.jpg";

const Spa = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="spa_new">
        <div className="spa__content">
          <h1 className="animate-hero">Spa & Wellness</h1>
        </div>
      </div>
      <div className="spa">
        <div className="spa_text" data-aos="fade-down">
          <h3>Welcome to La Serene Resort & Spa</h3>
          <p>
            La Serene Resort & Spa is a luxury wellness spa in Evershine Resort,
            Mahabaleshwar; A place to de-stress and unwind and a major
            attraction for guests who visit for rejuvenation. This exotic spa
            offers not just Spa therapies but customized wellness solutions and
            is a holistic blend of traditional, conventional and modern
            therapeutic techniques which seek to restore the natural equilibrium
            between body, mind and spirit.
          </p>
        </div>
      </div>
      <div className="spa_tag spa_tagline">
        <div className="spa_tag_container">
          <div className="spa_img_container" data-aos="flip-down">
            <img src={spa1} alt="" />
            <div className="spa_tag_border"></div>
            <div className="spa_tag_icon">Ayurveda Spa</div>
          </div>
          <div className="spa_img_container" data-aos="flip-down">
            <img src={spa2} alt="" />
            <div className="spa_tag_border"></div>
            <div className="spa_tag_icon">Luxury Spa</div>
          </div>
          <div className="spa_img_container" data-aos="flip-down">
            <img src={spa3} alt="" />
            <div className="spa_tag_border"></div>
            <div className="spa_tag_icon">Massage Spa</div>
          </div>
        </div>
      </div>
      <SpaSer />
      <Footer />
    </div>
  );
};

export default Spa;
