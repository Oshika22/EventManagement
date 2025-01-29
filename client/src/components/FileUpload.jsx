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
    <div className="file-upload bg-orange-500  p-6 rounded-lg shadow-lg max-w-lg mx-auto text-black"> 
      <h1 className='text-2xl font-semibold mb-4'>Upload Excel File</h1>
      <input type="text" placeholder='Event Name' onChange={handleNameChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <select onChange={handleTypeChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
        <option value="">Select the Type Of event</option>
        <option value="Startup">Startup Event</option>
        <option value="Hackathon">Hackathon Event</option>
        <option value="Conference">Conference Event</option>
        <option value="Registered Starup">Registered Startup</option>
        <option value="other">Others</option>
      </select>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <button onClick={handleFileUpload} className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Upload</button>
    </div>
  );
}

export default FileUpload;
