import React from "react";
import FileUpload from "../components/FileUpload";
import Navbar from "../components/Navbar";

const FileUploadPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-black min-h-screen flex items-center justify-center px-4 py-6">
        <FileUpload />
      </div>
    </>
  );
};

export default FileUploadPage;
