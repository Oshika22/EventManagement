import React from "react";

const AddEventPage = () => {
  return (
    <>
      {/* Main Content */}
      <div className="bg-black text-white min-h-screen px-4 py-6">
        {/* Title */}
        <h1 className="text-4xl text-[#ff9900] text-center mb-6">Create Event</h1>

        {/* Box below the title */}
        <div className="border border-[#ff9900] rounded-md bg-black mx-auto max-w-4xl p-8" style={{ height: "500px" }}>
          <div className="flex h-full">
            {/* 70% Section */}
            <div className="w-[70%] bg-black text-[#ff9900] p-4 overflow-y-scroll no-scrollbar">
              {/* Event Name */}
              <div className="mb-4">
                <label className="block text-lg">Event Name:</label>
                <input
                  type="text"
                  placeholder="Enter event name"
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Start Date and End Date */}
              <div className="mb-4">
                <label className="block text-lg">Start Date & End Date:</label>
                <div className="flex space-x-4 mt-2">
                  <input
                    type="date"
                    className="w-full p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                  />
                  <input
                    type="date"
                    className="w-full p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="mb-4">
                <label className="block text-lg">Location:</label>
                <input
                  type="text"
                  placeholder="Enter event location"
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Guests */}
              <div className="mb-4">
                <label className="block text-lg">Guests:</label>
                <input
                  type="text"
                  placeholder="Enter guests"
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900]"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-lg">Description:</label>
                <textarea
                  placeholder="Enter event description"
                  className="w-full mt-2 p-2 border border-[#ff9900] rounded-md bg-black text-[#ff9900] h-32"
                ></textarea>
              </div>
            </div>

            {/* 30% Section with gradient */}
            <div className="w-[30%] bg-gradient-to-b from-[#c1310d] to-[#ff9933] rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventPage;