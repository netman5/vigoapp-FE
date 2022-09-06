import React from 'react';
import { useSelector } from 'react-redux';
import styles from './UserInfo.module.css';
import Avatar from '../../../images/avatar.webp';
import CoverPhoto from '../../../images/coverphoto.jpeg';

function UserDetails() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  const { count } = useSelector((state) => state.followers.data);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div>
          <img src={CoverPhoto} alt={CoverPhoto} className={styles.coverPic} />
          <img src={Avatar} alt={Avatar} className={styles.userPic} />
        </div>
      </div>
      <div className={styles.userInfo}>
        <h3>{`${name}`}</h3>
        <p>
          Location:
          {' '}
          <span>San Diego</span>
        </p>
        <p>
          Occupation:
          {' '}
          <span>Software Developer</span>
        </p>
        <div className={styles.follow}>
          <p>
            Followers:
            {' '}
            <span>{count}</span>
          </p>

          <p>
            Following:
            {' '}
            <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
