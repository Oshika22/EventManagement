import React from "react";
// import EventDetails from "../components/EventDetails"; // EventDetails section
import TopParticipants from "../components/TopParticipants"; // Top Participants section
// import { FileUpload } from "../components/FileUpload"; // File upload component
import { EventList } from "../components/EventList";

const HomePage = () => {
  return (
    <div className="bg-black text-white container mx-auto px-4 py-6">
      {/* Top Participants Section */}
      <section>
        <TopParticipants />
      </section>

      {/* Events Section */}
      <section>
        <EventList />
      </section>

      {/* File Upload Section
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">File Upload</h1>
        <FileUpload />
      </section> */}
    </div>
  );
};

export default HomePage;
