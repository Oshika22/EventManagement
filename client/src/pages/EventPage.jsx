import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EventPage = () => {
  const { eventName } = useParams();
  const [participants, setParticipants] = useState([]);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-black text-[#ff9900] px-6 py-8">
      
      {/* Event Details Section */}
      <div className="max-w-4xl mx-auto bg-black border border-[#ff9900] rounded-lg p-6 shadow-lg h-[90px]">
        <h1 className="text-3xl font-bold text-center mb-4">{eventName}</h1>
        {eventData && (
          <div className="text-center">
            <p className="text-lg mb-2"><strong>Event Type:</strong> {eventData.even_type}</p>
            <p className="text-lg mb-2"><strong>Date:</strong> {eventData.date || "Not Available"}</p>
            <p className="text-lg mb-2"><strong>Description:</strong> {eventData.description || "No details provided."}</p>
          </div>
        )}
      </div>

      {/* Participants Table */}
      <div className="max-w-5xl mx-auto mt-8 bg-black border border-[#ff9900] rounded-lg p-6 shadow-lg overflow-x-auto">
        <h2 className="text-2xl text-center mb-4 flex justify-center">Participants</h2>

        {participants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#ff9900] text-white">
              <thead>
                <tr className="bg-[#ff9900] text-black">
                  {Object.keys(participants[0]).map((key) => (
                    <th key={key} className="border border-[#ff9900] px-4 py-2">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-black"}>
                    {Object.values(participant).map((value, i) => (
                      <td key={i} className="border border-[#ff9900] px-4 py-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};
