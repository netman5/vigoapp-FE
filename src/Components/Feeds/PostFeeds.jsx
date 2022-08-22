/* eslint-disable react/prop-types */
import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaRegThumbsUp } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { GiRapidshareArrow } from 'react-icons/gi';
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
              <div className={styles.details}>
                <img src={Avatar} alt="post" className={styles.profileImage} />
                <h3>{post.name || 'John Doe'}</h3>
              </div>
              <FiMoreHorizontal className={styles.moreIcon} />
            </div>
            <p className={styles.postDescription}>{post.text}</p>
            <div className={styles.postImage}>
              <img src={post.image_url} alt={post.content} />
            </div>

            <div className={styles.postStats}>
              <span>
                {`likes ${5}`}
              </span>

              <span>{`${400} comments`}</span>
            </div>
            <hr className={styles.divider} />

            <div className={styles.postReactions}>
              <div className={styles.like}>
                <FaRegThumbsUp className={styles.reactionIcons} />
                <span>Like</span>
              </div>
              <div className={styles.comment}>
                <BiCommentDetail className={styles.reactionIcons} />
                <span>Comment</span>
              </div>
              <div className={styles.share}>
                <GiRapidshareArrow className={styles.reactionIcons} />
                <span>Share</span>
              </div>
            </div>
          </li>
        </ul>
      )).reverse()}
    </div>
  );
}

export default PostFeeds;
