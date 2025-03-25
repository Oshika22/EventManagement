import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"; // Importing social icons

const Footer = () => {
  return (
    <footer className="bg-[#e68900] text-white py-6 mt-0">
      <div className="container mx-auto text-center">
        {/* Extra Line Above Main Text */}
        <p className="text-lg font-semibold mb-2">AIC - Manipal University Jaipur</p>
        
        {/* Main Footer Text */}
        <p className="text-lg">&copy; {new Date().getFullYear()} Event Management. All rights reserved.</p>

<br/>
        {/* Social Media Icons (Evenly Spaced) */}
        <div className="flex justify-evenly items-center w-full mb-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={28} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={28} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={28} />
          </a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
