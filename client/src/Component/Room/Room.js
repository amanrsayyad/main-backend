import React, { useEffect } from "react";
import "./Room.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import deluxe1 from "../../Assets/deluxe1.JPG";
import superiorKing1 from "../../Assets/superiorKing1.jpg";
import superiorQueen from "../../Assets/superiorQueen.jpg";
import executive2 from "../../Assets/executive2.jpg";
import king1 from "../../Assets/king1.jpg";
import queen1 from "../../Assets/queen1.jpg";

const Room = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="rooms" id="room">
      <div>
        <h2 className="room_h2">Our Rooms</h2>
        <p className="room_p">DISCOVER LA SERENE RESORT LIVING
         </p>
        <div className="rooms_container">
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={executive2} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>Executive Suite</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link
                to="/Executive"
                class="link link--thebe anime_link room_btn"
              >
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={superiorKing1} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>Superior King Room</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link
                to="/SuperiorKing"
                class="link link--thebe anime_link room_btn"
              >
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={superiorQueen} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>Superior Queen Room</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link
                to="/SuperiorQueen"
                class="link link--thebe anime_link room_btn"
              >
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={queen1} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>Queen Room</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link to="/Queen" class="link link--thebe anime_link room_btn">
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={king1} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>King Room</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link to="/King" class="link link--thebe anime_link room_btn">
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div data-aos="fade-down" className="card_room">
            <div>
              <img src={deluxe1} alt="" />
              <div className="opa_room opa"></div>
            </div>
            <div>
              <h3>Deluxe Room</h3>
              <div className="room_border"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci laborum eveniet cum minus saepe cumque veniam dolor,
                ipsam voluptatibus exercitationem. Soluta in iure deleniti vel!
              </p>
              <Link to="/Deluxe" class="link link--thebe anime_link room_btn">
                See Details <i class="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
