import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { id } from '../../../utils/utils';
import styles from './Followers.module.css';
import Avatar from '../../../images/avatar.webp';
import { fetchUserFollowers } from '../../../features/follows/followersSlice';

function Friends() {
  const dispatch = useDispatch();
  const { id: userId } = JSON.parse(localStorage.getItem('user'));
  const { followers } = useSelector((state) => state.followers.data);

  useEffect(() => {
    dispatch(fetchUserFollowers(userId));
  }, [dispatch]);

  return (
    <div className={styles.followers}>
      <ul className={styles.followerLists}>
        {followers.map((follower) => (
          <li key={follower.id} className={styles.follower}>
            <img src={follower.imageUrl || Avatar} alt="" />
            <span>{follower.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
