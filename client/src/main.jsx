import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

// Wrap the App component inside BrowserRouter for routing to work
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* Add BrowserRouter here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
