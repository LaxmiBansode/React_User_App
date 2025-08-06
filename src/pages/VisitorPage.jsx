import React, { useState, useRef, useEffect, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import '../styles/VisitorPage.css';
import { FaUserCheck, FaUsers, FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdEventAvailable } from "react-icons/md";
import { FaUserTie} from 'react-icons/fa';

const VisitorPage = () => {
 const [name, setName] = useState('');
const [welcomeMsg, setWelcomeMsg] = useState('');
const inputRef = useRef(null);
const navigate = useNavigate();

const {
  eventName,
  organizerName,
  visitorList,
  setVisitorList,
  visitorCount,
  setVisitorCount
} = useContext(EventContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

const handleCheckIn = () => {
  if (name.trim() === '') return;
  setVisitorList([...visitorList, name]);
  setVisitorCount(visitorCount + 1);
  setWelcomeMsg(`Welcome, ${name}!`);
  setName('');
};


  useEffect(() => {
    if (visitorList.length > 0) {
      setWelcomeMsg(`Welcome, ${visitorList[visitorList.length - 1]}!`);
    }
  }, [visitorList]);

  return (
    <div className="visitor-page">
      <div className="center-container">
        <div className="card">
          <h2><FaUserCheck /> Visitor Check-In</h2>
          <div className="input-group">
            <input
              ref={inputRef}
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCheckIn}>Check In</button>
          </div>

          <h3>{welcomeMsg}</h3>
          <p><FaUsers /> Total Visitors: {visitorCount}</p>

            <h3>Visitor List</h3>
          <ul className="visitor-list">
            {visitorList.map((visitor, index) => (
              <li key={index}>{visitor}</li>
            ))}
          </ul>

          <p><MdEventAvailable />Event: {eventName || 'No event yet'}</p>
          <p><FaUserTie />  Organizer: {organizerName || 'No organizer yet'}</p>
        
     

      <button className="goto-button" onClick={() => navigate('/event')}>
        <FaArrowRight /> Go to Event Setup
      </button>
       </div>
    </div>
    </div>
  );
};

export default VisitorPage;
