import React from 'react';
import { useNavigate } from "react-router-dom";
const TopParticipants = () => {
  const navigate = useNavigate();
  return (
    <button className="bg-gradient-to-b from-[#ff9c33] to-[#ff6a00] text-white p-4 rounded-lg shadow-md mb-8 mx-auto w-1/4 hover:scale-105 transition-transform duration-300 ease-in-out" 
    onClick={() => navigate("/frequent-participants")}>
      <h2 className="text-center text-lg">Explore Participants</h2>
    </button>
  );
};

export default TopParticipants;