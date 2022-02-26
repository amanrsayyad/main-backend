import React from 'react';
import './Review.css';
import google from '../../Assets/google.png';
import star from '../../Assets/star.png';

const Google = () => {
  return (
    <div className="google">
        <div className="google_grid">
            <div className="google_card">
                <div className="flex_card">
                  <img src={google} alt="" /><span>Rating</span> 
                      <span className="rating">
                         4.7 <img src={star} alt="" /> 
                         <span className='number'>528 reviews</span>  
                      </span> 
                </div>
                <div className="flex_card">
                    <div className="google_btn">
                      <a href="https://www.google.com/travel/hotels/la%20serene%20resort%20and%20spa/entity/CgoIqojI5-3r6chLEAE/reviews?g2lb=4716128,2503771,4597339,2502548,4647135,4640247,2503781,4649665,4258168,4524133,4723328,4680142,4718402,4308226,4401769,4270442,4306835,4722900,4707943,4284970,4270859,4291517&hl=hi-IN&gl=in&ssta=1&grf=EmQKLAgOEigSJnIkKiIKBwjmDxACGBwSBwjmDxADGAEgADAeQMoCSgcI5g8QAhgZCjQIDBIwEi6yASsSKQonCiUweDNiYzI2NTA3NzdmMjJiOGQ6MHg0YjkxYTc1ZWRjZjIwNDJh&q=la+serene+resort+and+spa&rp=EKqIyOft6-nISxCqiMjn7evpyEs4AkAASAHAAQI&ictx=1&sa=X&ved=2ahUKEwj_z-WL4Jr2AhWWAd4KHbPJClMQ4gl6BAgdEAU" 
                      target="_blank" rel="norefrer">
                       Write a review 
                      </a>   
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Google