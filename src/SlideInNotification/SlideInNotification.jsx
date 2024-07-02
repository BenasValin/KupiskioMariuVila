import React, { useEffect, useState } from 'react';
import './SlideInNotification.css';

const SlideInNotification = ({ text }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (text) {
      const id = Math.random();
      const newNotification = { id, text, exiting: false };

      setNotifications((prev) => [newNotification, ...prev]);

      const timer = setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === id ? { ...n, exiting: true } : n))
        );
        const removeTimer = setTimeout(() => {
          setNotifications((prev) => prev.filter((n) => n.id !== id));
        }, 350); // Match the CSS transition duration
        return () => clearTimeout(removeTimer);
      }, 5000); // 5000 milliseconds for 5 seconds

      return () => clearTimeout(timer); // Clear timeout on cleanup
    }
  }, [text]);

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, exiting: true } : n))
    );
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 350); // Match the CSS transition duration
  };

  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.exiting ? 'notification-exit' : 'notification-enter'}`}>
          <span className="icon">✔</span>
          <span>{n.text}</span>
          <button className="close-btn" onClick={() => removeNotification(n.id)}>✖</button>
        </div>
      ))}
    </div>
  );
};

export default SlideInNotification;
