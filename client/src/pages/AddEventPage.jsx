import React, { useState } from 'react';

const AddEventPage = () => {
  // Event Data dictionary
  const [eventData, setEventData] = useState({
    event_name: "",
    event_type: "", 
    start_date: "",
    end_date: "",
    location: "",
    guests: "",
    description: "",
  });
// Set the data to the event data dictionary
  const handleAddEventChange = (event) => {   
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Event added successfully!");
      setEventData({ eventName: "", eventType: "", startDate: "", endDate: "", location: "", guests: "", description: "" });
    } else {
      alert("Error adding event: " + data.message);
    }
  };

  return (
    <>
      {/* Main Content */}
      <div className="bg-black text-white min-h-screen px-4 py-6">
        {/* Title */}
        <h1 className="text-4xl text-[#ff9900] text-center mb-6">Create Event</h1>

        {/* Box below the title */}
        <div className="border border-[#ff9900] rounded-md bg-black mx-auto max-w-4xl p-8" style={{ height: "500px" }}>
          <div className="flex h-full">
            {/* 70% Section */}
            <div className="w-[70%] bg-black text-[#ff9900] p-4 overflow-y-scroll no-scrollbar">
              {/* Event Name */}
              <div className="mb-4">
                <label className="block text-lg">Event Name:</label>
                <input
                  type="text"
                  placeholder="Enter event name"
                  name="event_name"
                  value={eventData.event_name}
                  onChange={handleAddEventChange} 
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Type of Event */}
              <label className="block text-lg">Event Type</label>
              <select 
                name="event_type"
                value={eventData.event_type}
                onChange={handleAddEventChange} 
                className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
              >
                <option value="">Select the Type Of event</option>
                <option value="Startup">Startup Event</option>
                <option value="Hackathon">Hackathon Event</option>
                <option value="Conference">Conference Event</option>
                <option value="Registered Starup">Registered Startup</option>
                <option value="other">Others</option>
              </select>

              {/* Start Date and End Date */}
              <div className="mb-4">
                <label className="block text-lg">Start Date & End Date:</label>
                <div className="flex space-x-4 mt-2">
                  <input
                    type="date"
                    name="start_date"
                    value={eventData.start_date}
                    onChange={handleAddEventChange}
                    className="w-full p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                  />
                  <input
                    type="date"
                    name="end_date"
                    value={eventData.end_date}
                    onChange={handleAddEventChange}
                    className="w-full p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-lg">Location:</label>
                <input
                  type="text"
                  placeholder="Enter event location"
                  name="location"
                  value={eventData.location}
                  onChange={handleAddEventChange}
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Guests */}
              <div className="mb-4">
                <label className="block text-lg">Guests:</label>
                <input
                  type="text"
                  placeholder="Enter guests"
                  name="guests"
                  value={eventData.guests}
                  onChange={handleAddEventChange}
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-lg">Description:</label>
                <textarea
                  placeholder="Enter event description"
                  name="description"
                  value={eventData.description}
                  onChange={handleAddEventChange}
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900] h-32"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                // onClick={handleSubmit}
                onClick={handleSubmit} 
                className="w-full p-2 bg-[#ff9900] text-black rounded-md"
              >Submit</button>
            </div>

            {/* 30% Section with gradient */}
            <div className="w-[30%] bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventPage;
