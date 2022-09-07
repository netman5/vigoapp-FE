import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Followers.module.css';
import Avatar from '../../../images/avatar.webp';
import { fetchUserFollowers } from '../../../features/follows/followersSlice';

function Friends() {
  const dispatch = useDispatch();
  const { id: userId } = JSON.parse(localStorage.getItem('user'));
  const { followers } = useSelector((state) => state.followers.data);

  const data = followers || [];

  useEffect(() => {
    dispatch(fetchUserFollowers(userId));
  }, [dispatch]);

  return (
    <div className={styles.followers}>
      <h2>Friends</h2>
      <ul className={styles.followerLists}>
        {data.map((follower) => (
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
