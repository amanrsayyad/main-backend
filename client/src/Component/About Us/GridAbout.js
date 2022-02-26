import React from "react";
import "./GridAbout.css";
import skyview1 from "../../Assets/skyview1.jpg";
import Executive1 from "../../Assets/Executive1.jpg";

const GridAbout = () => {
    return (
        <div className="grid">
            <div className="grid_container">
                <div className="grid_card">
                    <img src={skyview1} />
                </div>
                <div className="grid_card">
                    <h2>Rediscover Nature</h2>
                    <p>We redefine luxury in the jungles of Mahabaleshwar! Adding a modern spin on timeless indulgence, Elixir Hills offers the largest luxury suites in stunning natural settings. Spacious and tastefully decorated, we offer a perfect blend of nature and luxury in Mahabaleshwar.
                        At La Serene Resort, there is Love in the Air!
                    </p>
                </div>
            </div>
            <div className="grid_container">
                <div className="grid_card">
                    <h2>Comfort</h2>
                    <p>
                    Blending natural colors and wooden furnishings, our rooms are designed to indulge you. Spacious and well- ventilated, they are equipped with all modern amenities to make your stay comfortable. Enjoy a cup of tea, and look out at the stunning views from the balcony. If you need anything else, remember that our services are just a call away.
                    </p>
                </div>
                <div className="grid_card">
                    <img src={Executive1} />
                </div>
            </div>
        </div>
        
    );
};

export default GridAbout;
