import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHome } from "react-icons/fa"; // Import Home Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header className="bg-[#e68900] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Home Icon Button */}
        <button onClick={() => navigate("/")} className="text-white text-2xl ml-12 hover:text-black transition">
          <FaHome />
        </button>

        {/* Search Bar and Search Button */}
        <div className="flex-1 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for events..."
            className="w-2/3 md:w-1/2 lg:w-1/3 p-2 h-10 rounded-l-lg border-2 border-white focus:outline-none focus:ring focus:ring-orange-300 shadow-md"
          />
          <button className="h-10 px-4 bg-[#e68900] border-2 border-l-0 border-t border-b border-white text-white font-semibold rounded-r-lg hover:bg-orange-500">
          <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Upload Event Participants Button */}
        <button
          className="ml-4 px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-orange-500 transition-all"
          onClick={() => navigate("/file-upload")} // Navigate to FileUploadPage
        >
          Upload Event Participants
        </button>
      </div>
    </header>
  );
};

export default Navbar;
