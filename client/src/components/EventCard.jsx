import React from 'react';
import { useNavigate } from 'react-router-dom';
const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.event_name}`);
  };
  return (
    <div>
        <button onClick={handleClick} className="event-card bg-slate-300">
          <h3>{event.event_name}</h3>
          <p>{event.date}</p>
          {/* Add more event details as needed */}
        </button>
    </div>

  );
};

export default EventCard;