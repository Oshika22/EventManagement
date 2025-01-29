import React from 'react';
import { useNavigate } from 'react-router-dom';
const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.event_name}`);
  };
  return (
    <div>
        <button onClick={handleClick} className="w-48 h-60 bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-lg p-4 flex items-center justify-center text-white">
          <h3 className="text-lg font-semibold">{event.event_name}</h3>
          <p>{event.date}</p>
          {/* Add more event details as needed */}
        </button>
    </div>

  );
};

export default EventCard;