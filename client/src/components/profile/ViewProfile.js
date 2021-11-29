import React, { Fragment, useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import ProfileImage from '../../img/profile-img.PNG';
import Email from '../../img/icons/ICONS LOUCASE-01.png';
import Lock from '../../img/icons/ICONS LOUCASE-02.png';
import Key from '../../img/icons/ICONS LOUCASE-03 (1).png';
import Phone from '../../img/icons/ICONS LOUCASE-11.png';
import Website from '../../img/icons/ICONS LOUCASE-14.png';
import Name from '../../img/icons/ICONS LOUCASE-04.png';

import Buidling from '../../img/icons/ICONS LOUCASE-12.png';
import Insta from '../../img/icons/ICONS LOUCASE-15.png';
import Twitter from '../../img/icons/ICONS LOUCASE-20.png';
import Facebook from '../../img/icons/ICONS LOUCASE-17.png';
import BE from '../../img/icons/ICONS LOUCASE-19.png';
import Whatsapp from '../../img/icons/ICONS LOUCASE-18.png';
import Bio from '../../img/icons/ICONS LOUCASE-06.png';
import LinkedIn from '../../img/icons/ICONS LOUCASE-16.png';
import Job from '../../img/icons/ICONS LOUCASE-10.png';
import Address from '../../img/icons/ICONS LOUCASE-13.png';
import SOS from '../../img/icons/ICONS LOUCASE-09.png';

import InstaWhite from '../../img/icons/WHITE ICONS LOUCASE-01.png';
import WhiteLinkedIn from '../../img/icons/WHITE ICONS LOUCASE-02.png';
import WhiteFacebook from '../../img/icons/WHITE ICONS LOUCASE-03.png';
import WhiteWhatsapp from '../../img/icons/WHITE ICONS LOUCASE-04.png';
import WhiteBE from '../../img/icons/WHITE ICONS LOUCASE-05.png';
import WhiteTwitter from '../../img/icons/WHITE ICONS LOUCASE-06.png';

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect
  we can then safely use this to construct our profileData
 */
const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ViewProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };

  return (
    <section className="container">
      <div
        className="profile-img-div"
        style={{ backgroundImage: `url(${ProfileImage})` }}
      ></div>

      <p style={{ marginBottom: '5px' }} className="Title-heading">
        Abubakar Shehbaz
      </p>
      <p className="Title-text">Founder & CTO of Samsoft</p>
      <div className="curved-btn-container">
        <div className="curved-btn-block">
          <button
            style={{
              borderTopLeftRadius: '7px',
              borderBottomLeftRadius: '7px',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              marginRight: '0.5px'
            }}
            type="submit"
            className="btn   curved-btn"
            value="Save Contact"
          >
            Save Contact
          </button>
          <button
            style={{
              borderTopRightRadius: '7px',
              borderBottomRightRadius: '7px',
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
              marginLeft: '0.5px'
            }}
            type="submit"
            className="btn   curved-btn"
            value="Connect"
          >
            Connect
          </button>
        </div>
        <button
          style={{
            backgroundColor: '#a04642'
          }}
          type="submit"
          className="btn  curved-btn  SOS-button"
          value="Connect"
        >
          SOS
        </button>
      </div>

      <div className="form-wrapper">
        <form className="form view-profile-form" onSubmit={onSubmit}>
          <div className="input-group">
            <span className="input-group-addon">
              <img src={Name} />
            </span>
            <div className="form-control custom-form-control">
              Founder, CEO & Creative Director
            </div>
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <img src={Phone} />
            </span>
            <div className="form-control custom-form-control">018 661 0913</div>
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <img src={Email} />
            </span>
            <div className="form-control custom-form-control">
              bkarshehbaz@gmail.com
            </div>
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <img src={Address} />
            </span>
            <div className="form-control custom-form-control">
              No.3-G & 3-1 Jalan Putra Mahkota 7/8c Putra heights 2353 Subhan
              jaya Selenagor
            </div>
          </div>

          <div className="input-group">
            <span className="input-group-addon">
              <img src={Website} />
            </span>
            <div className="form-control custom-form-control">
              www.loucase.com
            </div>
          </div>
        </form>
      </div>

      <div className="social-blocks-wrapper">
        <div className="social-blocks-footer">
          <img src={InstaWhite} alt="" />
        </div>
        <div className="social-blocks-footer">
          <img src={WhiteLinkedIn} alt="" />
        </div>
        <div className="social-blocks-footer">
          <img src={WhiteFacebook} alt="" />
        </div>
        <div className="social-blocks-footer">
          <img src={WhiteWhatsapp} alt="" />
        </div>
        <div className="social-blocks-footer">
          <img src={WhiteBE} alt="" />
        </div>
        <div className="social-blocks-footer">
          <img src={WhiteTwitter} alt="" />
        </div>
      </div>
      <p className="my-1 footer-text">
        Powered by Loucase <br />
        Already have an account?{' '}
        <Link style={{ color: '#292d2f', fontWeight: '600' }} to="/login">
          Login here
        </Link>
      </p>
      {/* 
      
      <h1 className="large text-primary">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={onChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={onChange}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={onChange}
              />
            </div>
          </Fragment>
        )}

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form> */}
    </section>
  );
};

ViewProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ViewProfile
);
