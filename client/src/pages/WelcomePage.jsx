import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
  };

  const contentStyle = {
    zIndex: 1,
    padding: '20px',
  };

  const buttonStyle = {
    marginTop: '30px',
    padding: '14px 40px',
    fontSize: '18px',
    backgroundColor: '#00bfff',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    boxShadow: '0 10px 20px rgba(0, 191, 255, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#007acc',
    boxShadow: '0 12px 24px rgba(0, 122, 204, 0.5)',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '700' }}>
          Welcome to the <span style={{ color: '#00bfff' }}>Event Management</span> Website!
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '20px auto' }}>
          Discover, plan, and book amazing events with ease. Let’s make your next event unforgettable.
        </p>
        <button
          onClick={handleEnter}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          style={buttonStyle}
        >
          Enter Home Page
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
