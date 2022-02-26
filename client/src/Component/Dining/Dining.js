import React from 'react';
import Footer from '../Footer/Footer';
import './Dining.css';
import resto from '../../Assets/resto.jpg';
import resto2 from '../../Assets/resto2.jpg';
import hotel1 from '../../Assets/hotel1.jpg';
import hotel2 from '../../Assets/hotel2.jpg';
import hotel3 from '../../Assets/hotel3.jpg';
import hotel4 from '../../Assets/hotel4.jpg';
import hotel5 from '../../Assets/hotel5.jpg';
import hotel6 from '../../Assets/hotel6.jpg';
import hotel7 from '../../Assets/hotel7.jpg';

const Dining = () => {
  return (
    <div>
    <div class="dining_new">
      <div class="dining__content">
        <h1 className="animate-hero">Dining</h1>
      </div>
    </div>
    <div className="dining">
      <div className="dining_container">
        <div className="card_img">
          <img src={hotel1} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel2} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel3} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Staff</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel4} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel5} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel6} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={hotel7} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant View</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={resto} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Restaurant Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div className="card_img">
          <img src={resto2} alt="" />
          <div className="overlay">
            <div class="details">
              <span class="category">
                <a href="#">Quality Food</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Dining;
