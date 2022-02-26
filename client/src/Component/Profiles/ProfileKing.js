import React from 'react';
import PropTypes from 'prop-types';

const ProfileKing = ({ profile: { 
    king }}) => {
  return (
    <div>
        <p className="glow">{king}</p>
    </div>
  )
}

ProfileKing.propTypes = {}

export default ProfileKing;