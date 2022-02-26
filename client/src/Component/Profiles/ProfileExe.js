import React from 'react';
import PropTypes from 'prop-types';

const ProfileExe = ({ profile: { 
    executive }}) => {
  return (
    <div>
        <p className="glow">{executive}</p>
    </div>
  )
}

ProfileExe.propTypes = {}

export default ProfileExe;