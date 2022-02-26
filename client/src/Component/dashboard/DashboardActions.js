import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardActions.css';

const DashboardActions = () => {
  return (
    <div className="dashboardActions">
        <Link to="/edit-profile" className="dashboardActions_btn"><i className="fas fa-user-circle "/>Edit Availability</Link>
    </div>
  )
}

export default DashboardActions;