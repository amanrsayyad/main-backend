import React from 'react';
import PropTypes from 'prop-types';

const ProfileExe = ({ profile: { 
    superiorQueen }}) => {
  return (
    <div>
        <p className="glow">{superiorQueen}</p>
    </div>
  )
}

ProfileExe.propTypes = {}

export default ProfileExe;