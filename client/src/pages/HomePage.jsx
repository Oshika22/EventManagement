import React, { useEffect, useState, useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import EventDetails from "../components/EventDetails"; // EventDetails section
import TopParticipants from "../components/TopParticipants"; // Top Participants section
// import { FileUpload } from "../components/FileUpload"; // File upload component
import { EventList } from "../components/EventList";
// import {footer} from '../components/footer';
import About from '../components/About';
const HomePage = () => {

  return (
    <div className="text-black container mx-auto px-4 py-6 flex flex-col items-center justify-center min-h-screen">
      <section>
        <About/>
      </section>
      {/* Top Participants Section */}
      {/* <section>
        <TopParticipants/>
      </section> */}

      {/* Events Section */}
      <section>
        <EventList />
      </section>

      {/* File Upload Section
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-4">File Upload</h1>
        <FileUpload />
      </section> */}
      {/* <footer/> */}
    </div>
  );
};

export default HomePage;
