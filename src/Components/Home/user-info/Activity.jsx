import React, { useId } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { BsCalendar4Event } from 'react-icons/bs';
import { RiHashtag } from 'react-icons/ri';
import styles from './UserInfo.module.css';

function Activity() {
  const id = useId();
  const groups = [
    {
      id,
      name: 'Sales Yard',
    },
    {
      id,
      name: 'Open Market',
    },
    {
      id,
      name: 'Book Warmer',
    },
    {
      id,
      name: 'The Thinkers',
    },
    {
      id,
      name: 'Neighborhood Watch',
    },
  ];

  const events = [
    {
      id,
      name: 'Cooking',
    },
    {
      id,
      name: 'JSWorld Conference',
    },
    {
      id,
      name: 'BedFord River Carnival',
    },
    {
      id,
      name: 'Summer Job Festival',
    },
    {
      id,
      name: 'ReactJS Conference',
    },
  ];

  const hashtags = [
    {
      id,
      name: 'Postive Thinking',
    },
    {
      id,
      name: 'WAGMI',
    },
    {
      id,
      name: 'Coding',
    },
    {
      id,
      name: 'bugs',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.groups}>
        <h3>Groups</h3>
        {groups.map((group) => (
          <ul key={group.id}>
            <li className={styles.lists}>
              <HiUserGroup />
              <span>{group.name}</span>
            </li>
          </ul>
        ))}
      </div>

      <div className={styles.events}>
        <h3>Events</h3>
        {events.map((event) => (
          <ul key={event.id}>
            <li className={styles.lists}>
              <BsCalendar4Event />
              <span>{event.name}</span>
            </li>
          </ul>
        ))}
      </div>

      <div className={styles.hashtags}>
        <h3>HashTags</h3>
        {hashtags.map((tag) => (
          <ul key={tag.id}>
            <li>
              <RiHashtag />
              <span>{tag.name}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Activity;
