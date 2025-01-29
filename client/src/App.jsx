import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopParticipants from './components/TopParticipants';
import { FileUpload } from './components/FileUpload'
import { EventList } from './components/EventList'
import {EventPage } from './pages/EventPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
   
      <div className="bg-black text-white container mx-auto px-4 py-6">
        <FileUpload/>
        <Router>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/event/:eventName" element={<EventPage/>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
