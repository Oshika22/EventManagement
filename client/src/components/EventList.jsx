// In Events.jsx
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';  // Assuming you have an EventCard component

export const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error('Error fetching events:', response.status);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Event List</h1>
      {events.length > 0 ? (
        events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))
      ) : (
        <p>No events found</p>
      )}
      <br />
    </div>
  );
};
