import React, { useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHome } from "react-icons/fa"; // Import Home Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { aiclogo, nitiayog} from "../assets/images";

const Navbar = () => {
  const container = useRef();
  const navigate = useNavigate(); // Initialize navigate function
  useGSAP(() => {

    gsap.to('.flip', 
      { scale: 0, 

        duration: 4, 
        repeat: -1, 
        yoyo: true, 
        ease: 'power1.inOut',
     
        transformOrigin: "50% 50%",
        // stagger: 1,
        repeatDelay: 2,
        delay: 1,
        });
    gsap.to('.flip-2',
      { scale: 1, 
        duration: 4, 
        repeat: -1, 
        yoyo: true, 
        ease: 'power1.inOut',
        
        transformOrigin: "50% 50%",
        // stagger: 1,
        repeatDelay: 2,
        delay: 1,
        });
  },
  );
  return (
    <header className="shadow-sm bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white">  

      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Home Icon Button */}
        <button onClick={() => navigate("/")} className="text-white text-2xl ml-12 hover:text-black transition">
          <FaHome />
        </button>

        {/* Logo */}
        <div className="logo flex items-center w-24 h-12 justify-center">
          <img src={aiclogo} alt="aiclg" className="flip w-14 h-14 absolute" />
          <img src={nitiayog} alt="nitiayog" className="flip-2 w-24 h-12 scale-0 absolute" />
        </div>
        {/* Search Bar and Search Button */}
        {/* <div className="flex-1 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for events..."
            className="w-2/3 md:w-1/2 lg:w-1/3 p-2 h-10 rounded-l-lg border-2 border-white focus:outline-none focus:ring focus:ring-orange-300 shadow-md"
          />
          <button className="h-10 px-4 bg-[#e68900] border-2 border-l-0 border-t border-b border-white text-white font-semibold rounded-r-lg hover:bg-orange-500">
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </div> */}

      
        {/* Upload Event Participants Button */}
        <button
          className="ml-4 px-4 py-2 bg-gradient-to-r from-[#ff6a00] to-[#ff9c33] text-white font-semibold rounded-lg shadow-md hover:from-[#ff6a00] hover:to-[#ff5c33] transition duration-500 active:from-[#d45500] active:to-[#ff3d00]"
          onClick={() => navigate("/file-upload")} // Navigate to FileUploadPage
        >
          Upload Event Participants
        </button>
      </div>
    </header>
  );
};

export default Navbar;
