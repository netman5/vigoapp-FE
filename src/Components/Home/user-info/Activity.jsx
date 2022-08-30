import React from 'react';
import styles from './UserInfo.module.css';

function Activity() {
  return (
    <div>
      <div className={styles.group}>
        <ul>
          <li>Sales</li>
        </ul>
      </div>

      <div className={styles.events}>
        <ul>
          <li>Sales</li>
        </ul>
      </div>

      <div className={styles.hastags}>
        <ul>
          <li>Sales</li>
        </ul>
      </div>
    </div>
  );
}

export default Activity;
