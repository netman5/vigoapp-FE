/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Followers.module.css';

function Events() {
  const [eventLists, setEventLists] = useState([]);
  const url = process.env.REACT_APP_TICKETMASTER_API;

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(url);
      setEventLists(response.data._embedded.events);
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      {eventLists.slice(0, 3).map((event) => (
        <ul key={event.id} className={styles.events}>
          <li className={styles.eventItems}>
            <img src={event.images[0].url} alt={event.images[0].url} className={styles.eventsImg} />
            <span>{event.name}</span>
            <span>{`Date: ${event.dates.start.localDate} : Time: ${event.dates.start.localTime}`}</span>
            <button type="button">Add Event</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Events;
