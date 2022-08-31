import { useId, useEffect, useState } from 'react';
import styles from './Followers.module.css';

function Events() {
  const [eventLists, setEventLists] = useState('');
  const id = useId();
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log('Latitude is: ', pos.coords.latitude);
      console.log('Longitude is: ', pos.coords.longitude);
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <ul key={event.id} className={styles.events}>
          <li className={styles.eventItems}>
            <span>{event.name}</span>
            <button type="button">Add Event</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Events;
