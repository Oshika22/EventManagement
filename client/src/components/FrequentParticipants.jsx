import React, { useEffect, useState } from "react";

const FrequentParticipants = () => {
  const [participants, setParticipants] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/participants/frequent");
        if (!response.ok) throw new Error("Failed to fetch participants");

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        setParticipants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="min-h-screen text-[#ff7700] px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Frequent Participants</h1>

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500"> Coming soon</p>
      ) : Object.keys(participants).length === 0 ? (
        <p className="text-center text-lg">No participants found more than once.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-black border border-[#ff9900] rounded-lg p-6 shadow-lg">
          <table className="w-full border-collapse border border-[#ff9900] text-white">
            <thead>
              <tr className="bg-[#ff9900] text-black">
                <th className="border border-[#ff9900] px-4 py-2">Participant Name</th>
                <th className="border border-[#ff9900] px-4 py-2">Participation Count</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(participants).map(([name, count], index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-black"}>
                  <td className="border border-[#ff9900] px-4 py-2">{name}</td>
                  <td className="border border-[#ff9900] px-4 py-2 text-center">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FrequentParticipants;

