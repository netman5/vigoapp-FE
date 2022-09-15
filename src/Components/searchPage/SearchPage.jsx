/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { followUser } from '../../features/follows/followersSlice';
import Avatar from '../../images/avatar.webp';
import styles from './SearchPage.module.css';

const SearchPage = ({ data, query }) => {
  const [btnText, setBtnText] = useState('Follow');
  // const { id: currUserId } = JSON.parse(localStorage.getItem('user'));
  // const { followers } = useSelector((state) => state.followers.data);
  const users = data.users || [];
  // const dispatch = useDispatch();

  const handleFollow = (userId) => {
    const followingId = users.find((user) => user.id === userId);
    // dispatch(followUser({ currUserId, following_id: userId }));
    if (!followingId.id) {
      setBtnText(btnText);
      console.log(userId, followingId.id);
    } else {
      setBtnText('unfollow');
    }
  };

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
            onClick={() => handleFollow(user.id)}
          >
            {btnText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
