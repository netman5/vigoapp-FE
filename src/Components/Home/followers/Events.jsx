/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Followers.module.css';
import { id } from '../../../utils/utils';

function Events() {
  const events = [
    {
      id: id(),
      name: 'Cooking',
    },
    {
      id: id(),
      name: 'JSWorld Conference',
    },
    {
      id: id(),
      name: 'BedFord River Carnival',
    },
    {
      id: id(),
      name: 'Summer Job Festival',
    },
    {
      id: id(),
      name: 'ReactJS Conference',
    },
  ];
  const [eventLists, setEventLists] = useState([]);
  const url = process.env.REACT_APP_TICKETMASTER_API;

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(url);
      setEventLists(response.data._embedded.events);
    };
    fetchAPI();
  }, [eventLists]);
  // const fourEvents = eventLists.length > 4 ? 4 : eventLists;
  // console.log(fourEvents);
  return (
    <div className={styles.container}>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <ul key={event.id} className={styles.events}>
          <li className={styles.eventItems}>
            <span>{event.name}</span>
            <span>2022-03-01</span>
            <button type="button">Add</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Events;
