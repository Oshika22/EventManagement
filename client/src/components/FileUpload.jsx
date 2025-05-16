import React, { useState } from 'react';

export const FileUpload = () =>  {
  const [file, setFile] = useState(null);
  const [tableName, setTableName] = useState("");
  const [tableType, setTableType] = useState("");
// function to handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setTableName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setTableType(event.target.value);
  };

  const handleFileUpload = async () => {
    if (!file || !tableName || !tableType) {
      alert('Please select a file or table name or table type');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tableName', tableName);
    formData.append('tableType', tableType);

    try {
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded and data saved successfully');
      } else {
        alert('Error uploading file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div className="file-upload w-2/3 text-white min-h-screen px-4 py-6"> 
      <h1 className='text-4xl text-[#ff9900] text-center mb-6'>Upload Excel File</h1>
      
      <div className="border border-[#ff9900] rounded-md mx-auto max-w-4xl p-8 overflow-y-auto flex flex-col" style={{ height: "320px" }}>
        <input 
          type="text" 
          placeholder='Event Name' 
          onChange={handleNameChange} 
          className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-white placeholder-[#ff9900] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
          style={{ color: '#ff9900' }}
        />
        <select 
          onChange={handleTypeChange} 
          className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-white text-[#ff9900] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
        >
          <option value="">Select the Type Of event</option>
          <option value="Startup">Startup Event</option>
          <option value="Hackathon">Hackathon Event</option>
          <option value="Conference">Conference Event</option>
          <option value="Registered Starup">Registered Startup</option>
          <option value="other">Others</option>
        </select>
        <div className="relative w-full mb-4">
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              id="file-upload"
              className="w-full p-3 border border-[#ff9900] rounded-lg bg-white text-[#ff9900] focus:outline-none focus:ring-2 focus:ring-[#ff9900] opacity-0 absolute inset-0 cursor-pointer"
            />
            <label
              htmlFor="file-upload"
              className="w-full p-3 border border-[#ff9900] rounded-lg bg-white text-[#ff9900] font-semibold cursor-pointer hover:bg-[#ff9900] hover:text-black transition duration-300 flex justify-center items-center"
            >
              📂 Choose File
            </label>
        </div>
        <button 
          onClick={handleFileUpload} 
          className="ml-4 px-4 py-2 border-[#ff9900] bg-gradient-to-r from-[#ff6a00] to-[#ff9c33] text-white font-semibold rounded-lg shadow-md hover:from-[#ff6a00] hover:to-[#ff4b33] transition duration-500 active:from-[#d45500] active:to-[#ff3d00]"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
