import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    GET_PROFILES,
    CLEAR_PROFILE,
    PROFILE_ERROR
} from './types';

//Gett ThE CuRRent UsEr PRoFiLe
export const getCurrentProfile = () => async dispatch => {
   try {
    const res = await axios.get('/api/profile/admin');

    dispatch({
        type: GET_PROFILE,
        payload: res.data
    });
    
   } catch (err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: { msg: err.response.statusText, status: err.response.status }
       })
   }
};

//GEt ALl PRofiLeS
export const getProfiles = () => async dispatch => {
    
    dispatch({ type: CLEAR_PROFILE });

    try {
     const res = await axios.get('/api/profile');
 
     dispatch({
         type: GET_PROFILES,
         payload: res.data
     });
     
    } catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
 };

//get Profile by userId
export const getProfileById = userId => async dispatch => {
   try {
    const res = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
        type: GET_PROFILE,
        payload: res.data
    });
    
   } catch (err) {
       dispatch({
           type: PROFILE_ERROR,
           payload: { msg: err.response.statusText, status: err.response.status }
       })
   }
};


//CReaTe Or UPdaTe A ProFiLe
export const createProfile = ( formData, navigate, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created' , 'success'));

        if(!edit) {
            navigate('/dashboard');
        }

    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}