import React from 'react';
import PropTypes from 'prop-types';

const ProfileDe = ({ profile: { deluxe }}) => {
  return (
    <div>
        <p className="glow">{deluxe}</p>
    </div>
  )
}

ProfileDe.propTypes = {}

export default ProfileDe;