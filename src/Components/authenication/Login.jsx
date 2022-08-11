import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Auth.module.css';

function Login() {
  const email = useRef();
  const password = useRef();

  const loading = 'Loading...';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
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

            <button type="button" className={Styles.loginBtn} disabled={loading}>
              {loading ? 'loading' : (
                'Log In'
              )}
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
