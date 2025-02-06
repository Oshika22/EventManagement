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
    <div className="file-upload bg-black text-white min-h-screen px-4 py-6"> 
      <h1 className='text-4xl text-[#ff9900] text-center mb-6'>Upload Excel File</h1>
      
      <div className="border border-[#ff9900] rounded-md bg-black mx-auto max-w-4xl p-8 overflow-y-auto" style={{ height: "320px" }}>
        <input 
          type="text" 
          placeholder='Event Name' 
          onChange={handleNameChange} 
          className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-black placeholder-[#ff9900] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
          style={{ color: '#ff9900' }}
        />
        <select 
          onChange={handleTypeChange} 
          className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900] focus:outline-none focus:ring-1 focus:ring-[#ff9900]"
        >
          <option value="">Select the Type Of event</option>
          <option value="Startup">Startup Event</option>
          <option value="Hackathon">Hackathon Event</option>
          <option value="Conference">Conference Event</option>
          <option value="Registered Starup">Registered Startup</option>
          <option value="other">Others</option>
        </select>
        <input 
          type="file" 
          accept=".xlsx, .xls" 
          onChange={handleFileChange} 
          className="w-full p-3 mb-4 border border-[#ff9900] rounded-lg bg-black text-[#ff9900] focus:outline-none focus:ring-2 focus:ring-[#ff9900]"
        />
        <button 
          onClick={handleFileUpload} 
          className="w-full bg-black text-[#ff9900] p-3 rounded-lg focus:outline-none focus:ring-3 focus:ring-[#ff9900] focus:border-2 focus:border-[#ff9900]"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
