// In EventList.jsx
import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
// import AddEvent from './AddEvent';
import { EventCategories } from './EventCategories';

import { useNavigate } from "react-router-dom";
export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Startup');
  const navigate = useNavigate();
  // const [isAddEventVisible, setIsAddEventVisible] = useState(false);
  //toggle between Startup and Hackathon
  const toggleOption = () => {
    setSelectedOption((prevOption) => (prevOption === 'Startup' ? 'Hackathon' : 'Startup'));
  };

// Fetch events from the server
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
    <div className="text-center py-6 bg-black">
      {/* <EventCategories/> */}
      {/* {isAddEventVisible && <AddEvent />} */}
     {/* Events Title */}
     <h1 className="text-[#ff9900] text-xl mb-4">Events</h1>
 
      {/* Event Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {["Startup", "Hackathon", "Conference", "Registered Startups", "Others"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-medium border transition-all duration-300 ${
              selectedOption === category ? "bg-[#ff9900] text-black border-[#ff9900]"  // Active button"
              : "bg-black text-[#ff9900] border-[#ff9900] hover:bg-[#ff9900] hover:text-black" // Inactive button
            }`}
            onClick={() => setSelectedOption(category)}
          >
        {category}
      </button>
    ))}
  </div>

    {/* Display the events created by the user */}
      <div className="flex flex-wrap justify-center gap-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard key={index} event={event} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" />
          ))
        ) : (
          <p>No events found</p>
        )}
{/* Add Event Card */}
      <div
        className="w-48 h-60 bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-lg p-4 flex items-center justify-center flex-wrap text-white cursor-pointer"
        onClick={() => navigate("/add-event")}
      >
        <h3 className="text-lg font-semibold">Add Event</h3>
      </div>
      </div>

    </div>
  );
};
