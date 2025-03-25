import React from "react";
import FrequentParticipants from "../components/FrequentParticipants";
import Navbar from "../components/Navbar";

const FrequentParticipantsPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-black min-h-screen flex items-center justify-center px-4 py-6">
        <FrequentParticipants />
      </div>
    </>
  );
};

export default FrequentParticipantsPage;