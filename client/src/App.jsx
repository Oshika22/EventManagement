import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'; // HomePage containing event list, top participants, etc.
import { EventPage } from './pages/EventPage';
import AddEventPage from './pages/AddEventPage';
import FileUploadPage from './pages/FileUploadPage'; // Import the new page
import Footer from "./components/Footer"; // Import Footer
import FrequentParticipantsPage from './pages/FrequentParticipantsPage'; // Import FrequentParticipants
import { bgimg } from "./assets/images"; // Import images
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar /> {/* Add Navbar Here */}
      <div className="text-black container mx-auto px-4 py-6 bg-gradient-to-b from-orange-100 via-yellow-50 to-white" 
      // style={{
      //     backgroundImage: `url(${bgimg})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //   }}
    >
        
        {/* Routes component is already handled in main.jsx */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/event/:eventName" element={<EventPage />} />
          <Route path="/add-event" element={<AddEventPage />} />
          <Route path="/file-upload" element={<FileUploadPage />} /> 
          <Route path="/frequent-participants" element={<FrequentParticipantsPage/>} />
        </Routes>
      </div>
      <Footer /> {/* Add Footer Here */}
    </>
  );
}

export default App;
