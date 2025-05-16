import React from "react";
import TopParticipants from "../components/TopParticipants";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-50 to-white py-12">
      
      {/* Header Section */}
      <header className="max-w-5xl mx-auto text-center px-6 mb-16">
        <h1 className="font-extrabold font-serif bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent text-5xl md:text-6xl leading-tight mb-6 animate-fadeIn">
          Transform Data Into Decisions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 text-justify animate-slideUp">
          Say goodbye to the hassle of manual data entry! Our intelligent platform seamlessly extracts user-submitted data from Excel forms, eliminating errors and saving valuable time. 
          With an AI-driven approach, we not only organize this data into a structured, queryable database but also provide real-time insights to help you make informed decisions.
        </p>
        <section className="mt-10">
          <TopParticipants />
        </section>
      </header>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        
        {/* Our Aim */}
        <section className="w-full max-w-md bg-white text-black p-8 rounded-3xl shadow-2xl hover:shadow-orange-400/40 transition duration-500 transform hover:scale-105 animate-slideUp">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">🎯 Our Aim</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-justify">
            <li>Develop a user-friendly system for real-time data extraction and storage.</li>
            <li>Integrate machine learning to provide predictive insights on event participation.</li>
            <li>Enhance data accessibility, ensuring structured and queryable records for better decision-making.</li>
          </ul>
        </section>

        {/* Our Vision */}
        <section className="w-full max-w-md h-72 bg-white text-black p-8 rounded-3xl shadow-2xl hover:shadow-yellow-400/40 transition duration-500 transform hover:scale-105 animate-slideUp delay-150">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">🌟 Our Vision</h2>
          <p className="text-gray-700 text-justify">
            We envision a smart, data-driven future where event and data management is seamless,
            automated, and insightful. Our platform empowers organizations to make informed
            decisions, predict participation trends, and optimize event planning using AI-driven insights.
          </p>
        </section>

        {/* Our Mission */}
        <section className="w-full max-w-md bg-white text-black p-8 rounded-3xl shadow-2xl hover:shadow-red-400/40 transition duration-500 transform hover:scale-105 animate-slideUp delay-300">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">🚀 Our Mission</h2>
          <p className="text-gray-700 text-justify">
            Our mission is to streamline data collection and analysis by efficiently extracting
            user-submitted Excel form data, organizing it into a structured database, and leveraging
            machine learning for predictive insights. We aim to simplify event participant tracking
            and enhance decision-making through an intuitive and efficient platform.
          </p>
        </section>

      </div>

    </div>
  );
};

export default About;
