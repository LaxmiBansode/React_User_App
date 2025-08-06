import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VisitorPage from './pages/VisitorPage';
import EventPage from './pages/EventPage';
import { EventProvider } from './context/EventContext';
import './styles/App.css';

const App = () => {
  return (
    <EventProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VisitorPage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </Router>
    </EventProvider>
  );
};

export default App;