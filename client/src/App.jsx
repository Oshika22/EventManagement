import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar at the top
import { FileUpload } from "./components/FileUpload"; // File upload component
import HomePage from "./pages/HomePage"; // HomePage containing event list, top participants, etc.
import EventDetails from './components/EventDetails'; // Import from components
import AddEventPage from "./pages/AddEventPage"; // AddEventPage

function App() {
  return (
    <Router>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-black text-white container mx-auto px-4 py-6">
        {/* Routes for different Pages */}
        <Routes>
          {/* Route for Homepage (EventDetails Component) */}
          <Route path="/" element={<HomePage />} /> {/* HomePage with event list */}

          {/* Route for Add Event Page */}
          <Route path="/add-event" element={<AddEventPage />} /> {/* Add Event Page */}

          {/* Route for File Upload Page */}
          <Route path="/file-upload" element={<FileUpload />} /> {/* File Upload Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
