import React from 'react';
import { id } from '../../../utils/utils';
import styles from './Followers.module.css';
import Avatar from '../../../images/avatar.webp';

function Friends() {
  const followers = [
    {
      id: id(),
      name: 'Musa Jugunu',
      imageUrl: '',

    },

    {
      id: id(),
      name: 'Yahaya Muniru',
      imageUrl: '',

    },

    {
      id: id(),
      name: 'Jayden Adagba',
      imageUrl: '',

    },

    {
      id: id(),
      name: 'Peter Aganba',
      imageUrl: '',

    },
  ];

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
