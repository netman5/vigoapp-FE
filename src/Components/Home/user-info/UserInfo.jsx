import React from 'react';
import Activity from './Activity';
import UserDetails from './UserDetails';
import styles from './UserInfo.module.css';

function UserInfo() {
  return (
    <div className={styles.main}>
      <UserDetails />
      <Activity />
    </div>
  );
}

export default UserInfo;
