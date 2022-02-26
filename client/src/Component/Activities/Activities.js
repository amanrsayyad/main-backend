import React, { useEffect } from 'react';
import './Activities.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from '../Footer/Footer';
import gameroom from '../../Assets/gameroom.jpg';
import pool from '../../Assets/pool.jpg';

const Activities = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    
    return (
        <div>
            <div className="activate_new">
                <div className="activate__content">
                    <h1 className="animate-hero">Activities</h1>
                </div>
            </div>
            <div className='acti'>
                <div className="acti_container">
                    <div className='acti_img' data-aos="fade-down">
                        <img src={gameroom} alt="" />
                        <div className="acti_layer"></div>
                    </div>
                    <div className='acti_img' data-aos="fade-down">
                        <img src={pool} alt="" />
                        <div className="acti_layer"></div>
                    </div>
                    <div className="acti_para" data-aos="fade-down">
                        <div className='acti_detail'>
                        <h3>Kids friendly hotels in Mahabaleshwar</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate cupiditate recusandae possimus laudantium accusamus pariatur labore perferendis commodi tempora nobis autem doloribus cum facere, voluptatum sequi, natus quas perspiciatis eligendi, nemo deleniti dolore quo.
                        </p>
                        </div>
                        <div className='acti_detail'>
                        <h3>WILSON POINT TO BE NOTED</h3>
                        <p>The highest point in Mahabaleshwar is just 500 meters away and is perfect for an early morning trekking to experience the amazing sunrise
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Activities;
