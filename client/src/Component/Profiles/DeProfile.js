import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Pages/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileDe from './ProfileDe';

const DeProfile = ({ getProfiles, profile: { profiles, loading }}) => {
   
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
                <ProfileDe key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>Loading...</h4>
            )}
          </div>
      </Fragment> )}
    </Fragment>
  ) 
}

DeProfile.propTypes = {
   getProfiles: PropTypes.func.isRequired,
   profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(DeProfile);