import React from 'react';
import PropTypes from 'prop-types';

const ProfileQueen = ({ profile: { 
    queen }}) => {
  return (
    <div>
        <p className="profile_rooms">{queen}</p>
    </div>
  )
}

ProfileQueen.propTypes = {}

export default ProfileQueen;