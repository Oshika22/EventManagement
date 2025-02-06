import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const categories = [
  { name: "Hackathons", img: "/hackathon.jpg" },
  { name: "Startups", img: "/startup.jpg" },
  { name: "Conferences", img: "/conference.jpg" }
];

const eventsData = {
  Hackathons: ["Hack IITK", "Code Battle", "Tech Sprint"],
  Startups: ["Pitch Night", "Investor Meet", "Startup Launch"],
  Conferences: ["TechSummit 2024", "AI Revolution", "Cloud Expo"]
};

export const EventCarousel = () => {
  const [activeCategory, setActiveCategory] = useState("Hackathons");

  return (
    <div className="p-6 text-center">
      {/* Swiper for Category Selection */}
      <Swiper spaceBetween={10} slidesPerView={2.5} centeredSlides>
        {categories.map((cat) => (
          <SwiperSlide key={cat.name}>
            <button
              onClick={() => setActiveCategory(cat.name)}
              className={`w-full h-24 bg-cover bg-center rounded-md p-4 text-lg font-bold ${
                activeCategory === cat.name ? "border-4 border-[#ff9900]" : "border border-gray-600"
              }`}
              style={{ backgroundImage: `url(${cat.img})` }}
            >
              {cat.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Events List */}
      <div className="mt-6 space-y-4">
        {eventsData[activeCategory].map((event, index) => (
          <div key={index} className="p-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900]">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

