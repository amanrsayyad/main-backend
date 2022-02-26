import React from 'react';
import about from '../../Assets/about.svg';
import './SvgAbout.css';

function SvgAbout() {
  return (
    <div className="svg_about">
      <div className="svg_container">
        <div className="svg_card">
           <h2>About Us</h2>
           <p>Your stay in La Serene Resorts will definitely take you one step closer to nature! While our comfortable rooms will keep you well rested, the real experience is in our surroundings.</p>
           <div className="svg_logo">
              <a><i class="fa-brands fa-youtube svg_i youtube"></i></a>
              <a><i class="fa-brands fa-facebook-square svg_i facebook"></i></a>
              <a><i class="fa-brands fa-instagram-square svg_i instagram"></i></a>
           </div>
        </div>
        <div className="svg_card">
           <img src={about} alt="" />
           {/* <iframe src=""/> */}

           {/* AIzaSyDlOFI8F4w-adODgzAVVZtcJnA8jYFAsMY */}

           {/* ChIJjSvydwdlwjsRKgTy3F6nkUs */}

           {/* https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJjSvydwdlwjsRKgTy3F6nkUs&key=AIzaSyDlOFI8F4w-adODgzAVVZtcJnA8jYFAsMY */}
        </div>
      </div>
    </div>
  )
}

export default SvgAbout;