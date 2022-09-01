import { useId, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Followers.module.css';

function Events() {
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
  const [eventLists, setEventLists] = useState(events);
  const url = process.env.TICKET_MASTER_API;

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(url);
      setEventLists(response.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      {eventLists.map((event) => (
        <ul key={event.id} className={styles.events}>
          <li className={styles.eventItems}>
            <span>{event.name}</span>
            <span>2022-03-01</span>
            <button type="button">Add Event</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Events;
