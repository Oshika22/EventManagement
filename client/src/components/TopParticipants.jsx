import React, { useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from "react-router-dom";
const TopParticipants = () => {
  const navigate = useNavigate();
  // useGSAP(() => {
  
  //   gsap.to('.pulse', 
  //     { scale: 1.1, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
  // },
  // );
  return (
    <button className="bg-gradient-to-b from-[#ffa333] to-[#ff6a00] text-white p-4 rounded-lg shadow-md mb-8 mx-auto w-1/4 hover:from-[#ff8128]  hover:to-[#ff4d00] transition duration-500 active:from-[#d45500] active:to-[#ff3d00]" 
    onClick={() => navigate("/frequent-participants")}>
      <h2 className="text-center text-lg">Explore Participants</h2>
    </button>
  );
};

export default TopParticipants;