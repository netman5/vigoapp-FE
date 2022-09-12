/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import Avatar from '../../images/avatar.webp';
import styles from './SearchPage.module.css';

const SearchPage = ({ data, query }) => {
  const users = data.users || [];

  return (
    <div className={styles.container}>
      {users.filter((user) => {
        if (query === '') {
          return user;
        } if (user.name.toLowerCase().includes(query.toLowerCase())) {
          return user;
        }
      }).map((user) => (
        <div key={user.id} className="d-flex w-50 gap-5 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img src={user.photo || Avatar} alt={user.photo} />
            <span>{user.name}</span>
          </div>
          <button type="button" className="btn btn-outline-primary">Follow User</button>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
