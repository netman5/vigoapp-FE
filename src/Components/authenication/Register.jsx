import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../features/auth/authSlice';
import Styles from './Auth.module.css';

function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(registerUser(data));
  };

  return (
    <div className={Styles.login}>
      <div className={Styles.loginWrapper}>
        <div className={Styles.loginLeft}>
          <h3 className={Styles.loginLogo}>Connecta</h3>
          <span className={Styles.loginDesc}>
            Connect with friends and the world around you on Connecta.
          </span>
        </div>

        <div className={Styles.loginRight}>
          <form className={Styles.loginBox} onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Username"
              className={Styles.loginInput}
              ref={name}
            />
            <input
              type="email"
              required
              placeholder="Email"
              className={Styles.loginInput}
              ref={email}
            />

            <input
              type="password"
              required
              minLength="6"
              placeholder="Confirm Password"
              className={Styles.loginInput}
              ref={password}
            />

            <button className={Styles.loginBtn} type="submit">
              Sign Up
            </button>

            <Link to="/login" style={{ alignSelf: 'center' }}>
              <button type="button" className={Styles.loginRegistration}>
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
