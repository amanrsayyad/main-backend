import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';
import Spinner from '../../Pages/Spinner';
import DashboardActions from './DashboardActions';
import './Dashboard.css';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (<Spinner />
  ) : (<div>
    <div class="dashboard_new">
      <div class="dashboard_content">
      </div>
    </div>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p><i className='fas fa-user' />Welcome {user && user.name}</p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p className='hasnot'>Hey Admin, Please Create A Rooms Availability Then You Can Make Changes</p>
          <Link to="/create-profile" className='create_profile'>Create Availability</Link>
        </Fragment>
      )}
    </div>
  </div>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);