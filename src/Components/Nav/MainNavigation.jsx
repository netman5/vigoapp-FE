/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './MainNavigation.module.css';
import { logoutUser } from '../../features/auth/authSlice';

function MainNavigation() {
  const isLoggedIn = localStorage.getItem('token') !== null;
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const { name, email } = user;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Connecta</div>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li>
                Hello!
                {' '}
                {name}
                {' '}
                {email}
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li onClick={handleLogout}>
                <Link to="/Logout">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
