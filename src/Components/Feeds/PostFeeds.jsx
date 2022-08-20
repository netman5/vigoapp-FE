/* eslint-disable react/prop-types */
import React from 'react';
import Avatar from '../../images/avatar.webp';
import styles from './PostFeeds.module.css';

function PostFeeds(props) {
  const { posts } = props;
  const data = posts || [];

  return (
    <div className={styles.feeds}>
      {data.map((post) => (
        <ul key={post.id}>
          <li>
            <div className={styles.postDetails}>
              <img src={Avatar} alt="post" className={styles.postImage} />
              <h3>{post.name || 'Anonymous'}</h3>
            </div>
            <p>{post.text}</p>
            <img src={post.image_url} alt={post.content} />
          </li>
        </ul>
      )).reverse()}
    </div>
  );
}

export default PostFeeds;
