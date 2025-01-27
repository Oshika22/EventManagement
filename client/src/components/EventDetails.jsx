import React, { useState } from 'react';

const EventDetails = () => {
  const [selectedOption, setSelectedOption] = useState('Startup'); // Default option

  const toggleOption = () => {
    setSelectedOption((prevOption) => (prevOption === 'Startup' ? 'Hackathon' : 'Startup'));
  };

  // Sample event data (can be dynamic later)
  const events = [
    { id: 1, name: 'Event 1' },
    { id: 2, name: 'Event 2' },
    { id: 3, name: 'Event 3' },
  ];

  return (
    <div className="text-center py-6">
      {/* Events Title */}
      <h1 className="text-[#ff9900] text-xl mb-4">Events</h1>

      {/* Sliding Toggle Switch */}
      <div className="relative w-40 h-12 bg-gray-300 rounded-lg mx-auto mb-6">
        {/* Slider */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full rounded-lg transition-transform duration-300 ${
            selectedOption === 'Startup' ? 'bg-[#ff9900] translate-x-0' : 'bg-[#ff9900] translate-x-full'
          }`}
        ></div>

        {/* Startup Label */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex items-center justify-center text-sm font-medium cursor-pointer ${
            selectedOption === 'Startup' ? 'text-black bg-[#ff9900]' : 'text-gray-700 bg-gray-950'
          }`}
          onClick={() => setSelectedOption('Startup')}
        >
          Startup
        </div>

        {/* Hackathon Label */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full flex items-center justify-center text-sm font-medium cursor-pointer ${
            selectedOption === 'Hackathon' ? 'text-black bg-[#ff9900]' : 'text-gray-700 bg-gray-950'
          }`}
          onClick={() => setSelectedOption('Hackathon')}
        >
          Hackathon
        </div>
      </div>

      {/* Event Cards */}
      <div className="flex justify-center space-x-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="w-48 h-60 bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-lg p-4 flex items-center justify-center text-white"
          >
            <h3 className="text-lg font-semibold">{event.name}</h3>
          </div>
        ))}

        {/* Add Event Card */}
        <div
          className="w-48 h-60 bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-lg p-4 flex items-center justify-center text-white cursor-pointer"
          onClick={() => alert('Add Event')}
        >
          <h3 className="text-lg font-semibold">Add Event</h3>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
