import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Hackathons", "Startups", "Conferences"];

const eventsData = {
  Hackathons: ["Hack IITK", "Code Battle", "Tech Sprint"],
  Startups: ["Pitch Night", "Investor Meet", "Startup Launch"],
  Conferences: ["TechSummit 2024", "AI Revolution", "Cloud Expo"]
};

export const EventCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Hackathons");

  return (
    <div className="p-6 text-center">
      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-lg font-bold rounded-md transition-all ${
              activeCategory === category ? "bg-[#ff9900] text-black" : "bg-gray-800 text-white"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Events Display */}
      <motion.div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {eventsData[activeCategory].map((event, index) => (
          <motion.div
            key={index}
            className="p-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900] shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {event}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};





