import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

import Logo from '../../img/Loucase Official Logo Transparent (2).png';

import Email from '../../img/icons/ICONS LOUCASE-01.png';
import Lock from '../../img/icons/ICONS LOUCASE-02.png';
import Key from '../../img/icons/ICONS LOUCASE-03 (1).png';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <section className="container">
      <p className="Title-heading">Sign Up</p>
      {/* <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p> */}

      <form className="form" onSubmit={onSubmit}>
        <div className="input-group">
          <span className="input-group-addon">
            <img src={Email} />
          </span>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control custom-form-control"
          />
        </div>

        <div className="input-group">
          <span className="input-group-addon">
            <img src={Lock} />
          </span>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control custom-form-control"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <img src={Lock} />
          </span>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            className="form-control custom-form-control"
          />
        </div>
        <div className="input-group">
          <span className="input-group-addon">
            <img src={Key} />
          </span>
          <input
            type="text"
            placeholder="Serial Number"
            name="name"
            value={name}
            onChange={onChange}
            className="form-control custom-form-control"
          />
        </div>
        <label
          style={{
            fontSize: '12px',
            color: '#292d2f',
            marginTop: '50px',
            marginBottom: '30px',

            margin: '40px 10px 18px auto',
            display: 'block',
            textAlign: 'center'
          }}
        >
          <input className="checkbox" type="checkbox" /> I understand and agree
          to terms & conditions
        </label>
        <input type="submit" className="btn  custom-btn-lg" value="Sign Up" />
      </form>
      <p className="my-1 footer-text">
        Powered by Loucase <br />
        Already have an account?{' '}
        <Link style={{ color: '#292d2f', fontWeight: '600' }} to="/login">
          Login here
        </Link>
      </p>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
