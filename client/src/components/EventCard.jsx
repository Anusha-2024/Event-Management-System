import React from 'react';

function EventCard({ event }) {
  return (
    <div
      style={{
        width: '100%',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
        cursor: 'pointer',
        color: '#000',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: '0',
        transition: 'transform 0.3s ease',
        backgroundColor: '#fff',
      }}
      onClick={() => {
        window.location.href = `/event/${event.id}`;
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img
        src={event.image || 'https://via.placeholder.com/300x180?text=No+Image'}
        alt={event.title}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          display: 'block',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
        }}
      />
      <div
        style={{
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '1.5rem',
            color: '#333',
          }}
        >
          {event.title}
        </h3>
        <p
          style={{
            margin: '0.25rem 0 0 0',
            fontSize: '1rem',
            color: '#666',
          }}
        >
          {new Date(event.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default EventCard;
