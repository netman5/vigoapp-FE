import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Followers.module.css';
import Avatar from '../../../images/avatar.webp';
import { fetchUserFollowers, unFollowUser } from '../../../features/follows/followersSlice';

function Friends() {
  const dispatch = useDispatch();
  const { id: userId } = JSON.parse(localStorage.getItem('user'));
  const { followers } = useSelector((state) => state.followers.data);

  const data = followers || [];

  const handleUnFollow = (followingId) => {
    dispatch(unFollowUser({ userId, following_id: followingId }));
  };

  useEffect(() => {
    dispatch(fetchUserFollowers(userId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchUserFollowers(userId));
  }, [followers]);

  return (
    <div className={styles.followers}>
      <h2>Friends</h2>
      <ul className={styles.followerLists}>
        {data.map((follower) => (
          <li key={follower.id} className={styles.follower}>
            <img src={follower.imageUrl || Avatar} alt="" />
            <span>{follower.name}</span>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => handleUnFollow(follower.id)}
            >
              Unfollow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Friends;
