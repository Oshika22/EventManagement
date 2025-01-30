import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <header className="bg-[#e68900] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Title */}
        <h1 className="text-white text-xl font-bold"></h1>
        
        {/* Search Bar and Search Button */}
        <div className="flex-1 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search for events..."
            className="w-2/3 md:w-1/2 lg:w-1/3 p-2 h-10 rounded-l-lg border border-gray-300 focus:outline-none focus:ring focus:ring-orange-300"
          />
          <button className="h-10 px-4 bg-[#e68900] text-white font-semibold rounded-r-lg hover:bg-orange-700">
            Search
          </button>
        </div>

        {/* Upload Event Participants Button */}
        <button
          className="ml-4 px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-[#ffb94d] transition-all"
          onClick={() => navigate('/file-upload')} // Navigate to FileUploadPage
        >
          Upload Event Participants
        </button>
      </div>
    </header>
  );
};

export default Navbar;
