import React from 'react';
import Avatar from '../../../images/avatar.webp';
import CoverPhoto from '../../../images/coverphoto.jpeg';
import styles from './UserInfo.module.css';

function UserInfo() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div>
          <img src={CoverPhoto} alt={CoverPhoto} className={styles.coverPic} />
          <img src={Avatar} alt={Avatar} className={styles.userPic} />
        </div>
      </div>
      <p>{`Welcome ${name}!`}</p>
    </div>
  );
}

export default UserInfo;
