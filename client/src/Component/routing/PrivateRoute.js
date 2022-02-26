import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Spinner from '../../Pages/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading }
}) => {
    if(loading) return(<Spinner />);
    if(isAuthenticated) return <Component />;

  return <Navigate to="/Login" />
  
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = (state) => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(PrivateRoute);