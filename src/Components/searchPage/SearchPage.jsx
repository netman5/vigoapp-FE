/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { useDispatch } from 'react-redux';
import { followUser } from '../../features/follows/followersSlice';
import Avatar from '../../images/avatar.webp';
import styles from './SearchPage.module.css';

const SearchPage = ({ data, query }) => {
  const { id: currUserId } = JSON.parse(localStorage.getItem('user'));
  const users = data.users || [];
  const dispatch = useDispatch();
  const click = false;

  return (
    <div className={styles.container}>
      {users.filter((user) => {
        if (query === '') {
          return user;
        } if (user.name.toLowerCase().includes(query.toLowerCase())) {
          return user;
        }
      }).map((user) => (
        <div key={user.id} className={styles.users}>
          <div className={styles.imgcontainer}>
            <img src={user.photo || Avatar} alt={user.photo} />
            <h5>{user.name}</h5>
            <span>
              Occupation:
              {' '}
              {user.occupation || 'Unknown'}
            </span>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => dispatch(followUser({ currUserId, following_id: user.id }))}
          >
            {!click ? 'unfollow' : 'follow'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
