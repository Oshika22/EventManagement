// In EventList.jsx
import React, { useEffect, useState, useRef} from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import EventCard from './EventCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
// import AddEvent from './AddEvent';

import { EventCategories } from './EventCategories';


// // import { EventCategories } from './EventCategories';

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start 50px below, invisible
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }, // Move up with fade-in
};

import { useNavigate } from "react-router-dom";
export const EventList = () => {
  const container = useRef();
  const [events, setEvents] = useState([]);
  const [selectedOption, setSelectedOption] = useState('Startup');
  const navigate = useNavigate();
  // const [isAddEventVisible, setIsAddEventVisible] = useState(false);
  //toggle between Startup and Hackathon
  // const toggleOption = () => {
  //   setSelectedOption((prevOption) => (prevOption === 'Startup' ? 'Hackathon' : 'Startup'));
  // };


// Fetch events from the server
useEffect(() => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/eventList/${selectedOption}`);
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
}, [selectedOption]);

  // GSAP animation for the container
  useGSAP(() => {
    // Pulsing animation for Add Event icon
    gsap.to('.pulse', {
      scale: 1.25,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }); 
  return (
    <div className="text-center py-6 text-black display flex flex-col items-center justify-center">
      {/* <EventCategories/> */}
      {/* {isAddEventVisible && <AddEvent />} */}
     {/* Events Title */}
     <h1 className="font-bold font-serif bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-7xl mb-4">Incubation Centre Events</h1>
 
      {/* Event Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6 flex-wrap gap-2">
        {["Startup", "Hackathon", "Workshop", "Registered Startups"].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg font-medium border transition-all duration-300 shadow-lg ${
              selectedOption === category ? " bg-[#ff8800] text-black border-[#ff9900]"  // Active button"
              : "text-[#ff9900] border-[#ff8800] hover:bg-[#ff8800a1] hover:text-black" // Inactive button
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
            <EventCard key={index} event={event} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" 
            variants={cardVariants} // Apply the animation
            initial="hidden" // Start with hidden state
            animate="visible" // Animate to visible state
            exit="hidden" // Optional: If you want to add exit animation
            whileHover={{ scale: 1.05 }} // Optional: Add a nice hover effect
            />
          ))
        ) : (
          <p></p>
        )}
{/* Add Event Card */}
      <div
        className="w-48 h-60 shadow-lg bg-gradient-to-b from-[#ff6a00] to-[#ff9c33] rounded-lg p-4 flex flex-col items-center justify-center flex-wrap text-white cursor-pointer hover:from-[#ff6a00] hover:to-[#ff4415] transition duration-500 active:from-[#d45500] active:to-[#ff3d00] active:scale-95 active:shadow-inner"
        onClick={() => navigate("/add-event")}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        <FontAwesomeIcon icon={faCalendarPlus} className='pulse text-4xl m-2'/>
        <h3 className="text-lg font-semibold">Add Event</h3>
      </div>

      </div>

    </div>
  );
};
