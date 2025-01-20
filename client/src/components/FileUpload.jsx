import React, { useState } from 'react';

export const FileUpload = () =>  {
  const [file, setFile] = useState(null);
  const [tableName, setTableName] = useState("");
  const [tableType, setTableType] = useState("");
  
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
    <div className="App">
      <h1>Upload Excel File</h1>
      <input type="text" onChange={handleNameChange}/>
      <select onChange={handleTypeChange}>
        <option value="">Select the Type Of event</option>
        <option value="Startup">Startup Event</option>
        <option value="Hackathon">Hackathon Event</option>
        <option value="Conference">Conference Event</option>
        <option value="Registered Starup">Registered Startup</option>
        <option value="other">Others</option>
      </select>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
