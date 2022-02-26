import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './account.css';

const Register = ({ setAlert, register, isAuthenticated}) => {

    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name ,email ,password ,password2} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Password Does Not Match' ,'danger');
        } else {
            register({ name ,email ,password });
        }
    };

    //Redirect if logdin
    if(isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div>
            <div class="account_new">
                <div class="account_content">
                </div>
            </div>
            <div className="container">
                <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                        <form onSubmit={e => onSubmit(e)}>
                            <h2 className='contact_head'>Register</h2>
                            <input 
                            type="text" 
                            name="name" 
                            value={name} 
                            onChange={e => onChange(e)} 
                            class="field" 
                            placeholder="Your Name" 
                            />
                            <input 
                            type="email" 
                            name="email" 
                            class="field" 
                            value={email} 
                            onChange={e => onChange(e)} 
                            placeholder="Your Email" 
                            />
                            <input 
                            type="password" 
                            name="password" 
                            class="field" 
                            value={password} 
                            onChange={e => onChange(e)}
                            placeholder="Enter Your Password"
                            />
                            <input 
                            type="password" 
                            name="password2" 
                            class="field" 
                            value={password2} 
                            onChange={e => onChange(e)} 
                            placeholder="Confirm Your Password"
                            />
                            <button className="btn_register">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register})(Register);
