import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Styles from './Auth.module.css';
import { loginUser } from '../../features/auth/authSlice';

function Login() {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    dispatch(loginUser(data));
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
              type="email"
              placeholder="Email"
              required
              ref={email}
              className={Styles.loginInput}
            />

            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              ref={password}
              className={Styles.loginInput}
            />

            <button type="submit" className={Styles.loginBtn}>
              Log In
            </button>
            <span className={Styles.loginForgot}>Forgot Password?</span>

            <Link to="/register" style={{ alignSelf: 'center' }}>
              <button type="button" className={Styles.loginRegistration}>
                Create a New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
