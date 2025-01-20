import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FileUpload } from './components/FileUpload'
import { EventList } from './components/EventList'
import {EventPage } from './pages/EventPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>File Upload</h1>
      <FileUpload/>
      {/* <h1>Events</h1>
      <EventList/> */}
      <Router>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:eventName" element={<EventPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
