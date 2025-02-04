import React, { useState } from "react";

const categories = ["Hackathons", "Startups", "Conferences"];

const eventsData = {
  Hackathons: ["Hack IITK", "Code Battle", "Tech Sprint"],
  Startups: ["Pitch Night", "Investor Meet", "Startup Launch"],
  Conferences: ["TechSummit 2024", "AI Revolution", "Cloud Expo"]
};

export const SidebarEvents = () => {
  const [hoverCategory, setHoverCategory] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-black border-r border-[#ff9900] p-4 space-y-4">
        {categories.map((category) => (
          <button
            key={category}
            onMouseEnter={() => setHoverCategory(category)}
            className="w-full p-3 text-left text-lg font-bold bg-[#ff9900] text-black rounded-md"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Events Display */}
      <div className="flex-1 p-6">
        {hoverCategory ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">{hoverCategory}</h2>
            <div className="grid grid-cols-2 gap-4">
              {eventsData[hoverCategory].map((event, index) => (
                <div key={index} className="p-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900]">
                  {event}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400">Hover over a category to see events.</p>
        )}
      </div>
    </div>
  );
};

