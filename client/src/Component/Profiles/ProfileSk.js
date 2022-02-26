import React from 'react';
import PropTypes from 'prop-types';

const ProfileSk = ({ profile: { 
    superiorKing }}) => {
  return (
    <div>
        <p className="glow">{superiorKing}</p>
    </div>
  )
}

ProfileSk.propTypes = {}

export default ProfileSk;