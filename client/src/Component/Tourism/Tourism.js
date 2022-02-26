import React from 'react';
import Footer from '../Footer/Footer';
import Places from './Places';
import tourism1 from '../../Assets/tourism1.jpg';
import tourism2 from '../../Assets/tourism2.jpg';
import './Tourism.css';

function Tourism() {
  return (
    <div>
    <div className="tourism_new">
        <div className="tourism__content">
            <h1>Tourism</h1>
        </div>
    </div>
    <div className='tourism'>
        <div className="tourism_container">
            <div className="tourism_card">
                <h2 className='tourism_heading'>Explore the <br /> beauty of mahabaleshwar with La Serene Resort</h2>
            </div>
            <div className="tourism_card">
                <img src={tourism1} alt="" className='tourism_img' />
            </div>
        </div>
    </div>
    <div className='tourism2'>
        <div className="tourism_container">
            <div className="tourism_card">
                <img src={tourism2} alt="" className='tourism_img' />
            </div>
            <div className="tourism_card">
                <h2 className='tourism_heading2'>A New Way to Explore The Mahabaleshwar</h2>
                <p className='tourism_para2'>For decades travellers have reached books when looking to plan and execute their perfect trip, but now, they can also let La Serene Resort Experiences lead the way</p>
            </div>
        </div>
    </div>
        <h2 className='places_h2'>Tourist Places In Mahabaleshwar</h2>
    <Places />
    <Footer />
</div>
  )
}

export default Tourism