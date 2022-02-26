import React, { useState } from 'react';
import './account.css';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {

    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
    });

    const { email ,password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password)
    };

    
    //Redirect if logdin
    if(isAuthenticated) {
        return <Navigate to="/dashboard" />
    }


    return (
        <div>
            <div class="account_new">
                <div class="account_content">
                    {/* <h1 className="animate-hero">Register</h1> */}
                </div>
            </div>
            <div className="container">
                <div className="contact-box">
                    <div className="left"></div>
                    <div className="right">
                        <form onSubmit={e => onSubmit(e)}>
                            <h2 className='contact_head'>Login</h2>
                            <input 
                            type="email" 
                            name="email" 
                            class="field" 
                            value={email} 
                            onChange={e => onChange(e)} 
                            placeholder="Your Email" 
                            required
                            />
                            <input 
                            type="password" 
                            name="password" 
                            class="field" 
                            value={password} 
                            onChange={e => onChange(e)} 
                            placeholder="Enter Your Password"
                            required 
                            />
                            <button className="btn_register">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

