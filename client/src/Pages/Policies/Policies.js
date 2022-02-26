import React from 'react';
import { PoliciesData } from '../../data/PoliciesData';
import './Policies.css';

function Policies() {
    return (
        <div>
            <div className="policies_new">
                <div className="policies__content">
                    <h1 className="animate-hero">Policies</h1>
                </div>
            </div>
        <div className="policies">
            <div className="policies_container">
                    {PoliciesData.map((item)=> (
                        <div className="policies_card">
                       <div className="policies_img">
                        {item.image}
                       </div>
                       <div className="policies_text">{item.text}</div>
                       </div>
                    ))}
            </div>
        </div>
     </div>
    )
}

export default Policies;