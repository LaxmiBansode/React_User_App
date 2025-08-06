import React, { useState, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';
import '../styles/EventPage.css';
import { FaUserTie, FaSave, FaArrowLeft } from 'react-icons/fa';
import { BsStars } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
const EventPage = () => {
  const { setEventName, setOrganizerName, eventName, organizerName } = useContext(EventContext);
  const [eventInput, setEventInput] = useState('');
  const [organizerInput, setOrganizerInput] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    setEventName(eventInput);
    setOrganizerName(organizerInput);
    navigate('/');
  };

  return (
    <div className="event-page">
      <div className="card">
        <h2><BsStars />Event Info Manager</h2>
        <div className="input-group">
          <input
            type="text"
            value={eventInput}
            placeholder="Event Name"
            onChange={(e) => setEventInput(e.target.value)}
          />
          <input
            type="text"
            value={organizerInput}
            placeholder="Organizer Name"
            onChange={(e) => setOrganizerInput(e.target.value)}
          />
          <button onClick={handleSave}><FaSave /> Save Event Info</button>
        </div>

        <p><MdEventAvailable /> Event: {eventName || 'No event yet'}</p>
        <p><FaUserTie /> Organizer: {organizerName || 'No organizer yet'}</p>
      

      <button className="goto-button" onClick={() => navigate('/')}> 
        <FaArrowLeft /> Go to Main Content
      </button>
      </div>
    </div>
  );
};

export default EventPage;