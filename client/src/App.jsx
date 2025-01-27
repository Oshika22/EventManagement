import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar at the top
import { FileUpload } from './components/FileUpload'; // File upload component
import { EventList } from './components/EventList'; // Event list component
import { EventPage } from './pages/EventPage'; // Event detail page
import TopParticipants from './components/TopParticipants'; // Top Participants section
import EventDetails from './components/EventDetails'; // Event Details section

function App() {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-black text-white container mx-auto px-4 py-6">

        {/* Top Participants Section */}
        <section>
          <TopParticipants />
        </section>

        {/* Events Section */}
        <section>
          <EventDetails />
        </section>

        {/* File Upload Section */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-4">File Upload</h1>
          <FileUpload />
        </section>

        {/* Router for Event Pages */}
        <Router>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/event/:eventName" element={<EventPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;