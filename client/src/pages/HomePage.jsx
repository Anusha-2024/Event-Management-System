import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import eventService from '../services/eventService';


function HomePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const data = await eventService.getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events', error);
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.2rem' }}>Loading events...</p>;

  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          No events available.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {events.map(event => (
            <div
              key={event.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                backdropFilter: 'blur(8px)',
                padding: '1rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {/* Pass event to your existing EventCard */}
              <EventCard event={event} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;