import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EventPage = () => {
  const { eventName } = useParams(); // Dynamic event name from URL
  const [participants, setParticipants] = useState([]);
  const [eventData, setEventData] = useState(null);


  
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${eventName}`);
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching events2:', error);
      }
    };

    fetchEventData();
    const fetchParticipants = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/participants/${eventName}`);
        if (!response.ok) throw new Error('Failed to fetch participants');
        const data = await response.json();
        setParticipants(data);
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchParticipants();
  }, [eventName]);
  

  return (
    <div>
      <h1>Participants for Event: {eventName}</h1>
{/* fetching data of participants */}
      {participants.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(participants[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                {Object.values(participant).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No participants found or still loading...</p>
      )}
    </div>
  );
};
