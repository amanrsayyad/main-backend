import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Pages/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileSk from './ProfileSk';

const SuKing = ({ getProfiles, profile: { profiles, loading }}) => {
   
  useEffect(()=> {
    getProfiles();
  }, []);

 return (
    <Fragment>
        { loading ? (
        <Spinner />
      ) : ( <Fragment>
          <div>
          {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileSk key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>Loading...</h4>
            )}
          </div>
      </Fragment> )}
    </Fragment>
  ) 
}

SuKing.propTypes = {
   getProfiles: PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(SuKing);