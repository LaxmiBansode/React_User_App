import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventName, setEventName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [visitorList, setVisitorList] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);

  return (
    <EventContext.Provider
      value={{
        eventName,
        setEventName,
        organizerName,
        setOrganizerName,
        visitorList,
        setVisitorList,
        visitorCount,
        setVisitorCount
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
