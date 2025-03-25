import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const EventPage = () => {
  const { eventName } = useParams();
  const [participants, setParticipants] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
// fetch the event data and participants data
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${eventName}`);
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventData();

    const fetchParticipants = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/participants/${eventName}`);
        if (!response.ok) throw new Error("Failed to fetch participants");
        const data = await response.json();
        setParticipants(data);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    fetchParticipants();
  }, [eventName]);

  // Filter participants based on search input
  const filteredParticipants = participants.filter((participant) =>
    Object.values(participant).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-black text-[#ff9900] px-6 py-8">
      
      {/* Event Details Section */}
      <div className="max-w-4xl mx-auto bg-black border border-[#ff9900] rounded-lg p-6 shadow-lg h-[200px]">
        <h1 className="text-3xl font-bold text-center mb-4">{eventName}</h1>
        {eventData && (
          <div className="text-center">
            <p className="text-lg mb-2"><strong>Event Type:</strong> {eventData.event_type}</p>
            <p className="text-lg mb-2"><strong>Date:</strong> {eventData.date || "Not Available"}</p>
            <p className="text-lg mb-2"><strong>Description:</strong> {eventData.description || "No details provided."}</p>
          </div>
        )}
      </div>

      {/* Participants Table */}
      <div className="max-w-5xl mx-auto mt-8 bg-black border border-[#ff9900] rounded-lg p-6 shadow-lg overflow-x-auto">
        <h2 className="text-2xl text-center mb-4 flex justify-center">Participants</h2>

        {/* Search Bar for Participants */}
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search participants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-1/2 h-10 p-2 border border-r-0 border-t border-b border-[#ff9900] rounded-md bg-black text-[#ff9900] focus:outline-none focus:ring-2 focus:ring-[#ff9900]"
          />
          <button className="h-10 px-4 border-2 border-l-0 border-t border-b border-[#ff9900] text-[#ff9900] font-semibold rounded-r-lg hover:bg-[#0e0e0e]">
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Table to Display Participants */}
        {filteredParticipants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#ff9900] text-white">
              <thead>
                <tr className="bg-[#ff9900] text-black">
                  {Object.keys(filteredParticipants[0]).map((key) => (
                    <th key={key} className="border border-[#ff9900] px-4 py-2">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredParticipants.map((participant, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-black"}>
                    {Object.values(participant).map((value, i) => (
                      <td key={i} className="border border-[#ff9900] px-4 py-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-lg">No participants found.</p>
        )}
      </div>
    </div>
  );
};
