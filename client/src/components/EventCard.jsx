import React from 'react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${event.event_name}`);
  };
  return (
    <div>
        <button onClick={handleClick} className="w-48 h-60 bg-gradient-to-b from-[#ff6a00] to-[#ff9c33] rounded-lg border border-[#ff9900] p-4 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300 ease-in-out">
          <h3 className="text-lg font-semibold">{event.event_name}</h3>
          <p>{event.date}</p>
          {/* Add more event details as needed */}
        </button>
    </div>

  );
};

export default EventCard;