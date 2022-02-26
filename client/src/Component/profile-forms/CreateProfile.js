import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import "./CreateProfile.css";

const CreateProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile}) => {


    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        executive: "",
        superiorKing: "",
        superiorQueen: "",
        king: "",
        queen: "",
        deluxe: "",
    });

    const { executive, superiorKing, superiorQueen, king, queen, deluxe } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
      e.preventDefault();
      createProfile(formData, navigate, profile ? true : false);
    }

    return (
        <div>
            <div class="createProfile_new">
                <div class="createProfile_content"></div>
            </div>
            <div className="createProfile">
                <h1>Create Availability</h1>
                <p>*All Feilds Are Required</p>
                <div className="profile_input">
                    <form onSubmit={onSubmit}>
                        
                        <label className="label_rooms">Executive:</label>
                        <input type="text" name="executive" value={executive} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms Availybility Of Executive Suite"/>  

                        <label className="label_rooms">SuperiorKing:</label>
                        <input type="text" name="superiorKing" value={superiorKing} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms Availybility Of SuperiorKing Room"/> 

                        <label className="label_rooms">SuperiorQueen:</label>
                        <input type="text" name="superiorQueen" value={superiorQueen} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms Availybility Of SuperiorQueen Room"/>  

                        <label className="label_rooms">King:</label>
                        <input type="text" name="king" value={king} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms Availybility Of King Room"/>    

                        <label className="label_rooms">Queen:</label>
                        <input type="text" name="queen" value={queen} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms Availybility Of Queen Room"/>  

                        <label className="label_rooms">Deluxe:</label>
                        <input type="text" name="deluxe" value={deluxe} onChange={e => onChange(e)} className="profile_fields" placeholder="Rooms
                         Availybility Of Deluxe Room"/>    

                        <div className="profile_btn">
                        <input type="submit" className="update_profile" value="Update Availability" />
                        <Link to="/dashboard" className="update_profile">Go Back</Link>
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(CreateProfile);
