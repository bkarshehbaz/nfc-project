import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import EditIcon from '../../img/icons/ICONS LOUCASE-07.png';

import Profile from '../../img/icons/croped-ICONS LOUCASE-06.png';
import Connect from '../../img/icons/cropped-ICONS LOUCASE-08.png';
import EditProfile from '../../img/icons/cropped-ICONS LOUCASE-05.png';

import NewDashboard from './NewDashboard';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="container">
      <p style={{ marginBottom: '5px' }} className="Title-heading">
        Dashboard
      </p>
      <p className="Title-text">Manage Your account in one place</p>
      <div className="dashboard-container">
        <div className="blocks-wrapper">
          <Link to="/edit-profile">
            <div className="block">
              <img src={EditProfile} />
              <p className="icon-heading">Edit Profile</p>
              <p className="icon-text">Customiz your personal information</p>
            </div>
          </Link>
          <Link to="">
            <div className="block">
              <img src={Profile} />
              <p className="icon-heading">View Profile</p>
              <p className="icon-text">Time to start connecting</p>
            </div>
          </Link>

          <Link to="">
            <div className="block">
              <img src={EditIcon} />
              <p className="icon-heading">Share Profile</p>
              <p className="icon-text">Automatically share your profile</p>
            </div>
          </Link>
          <Link to="">
            <div className="block">
              <img src={Connect} />
              <p className="icon-heading">Connections</p>
              <p className="icon-text">View all your connections</p>
            </div>
          </Link>
        </div>
      </div>
      <input
        type="submit"
        className="btn  custom-btn-small "
        value="SIGN OUT"
      />
      {/* <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )} */}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
