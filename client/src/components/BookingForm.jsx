import React, { useState } from 'react';
import eventService from '../services/eventService';

function BookingForm({ eventId, onBookingSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await eventService.bookEvent(eventId, { name, email });
      onBookingSuccess();
      setName('');
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Booking...' : 'Confirm Booking'}
      </button>
      {error && <p className="error-text">{error}</p>}

      <style>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .form-container input {
          padding: 0.8rem 1rem;
          width: 100%;
          max-width: 300px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
        }

        .form-container button {
          background: #007BFF;
          color: white;
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .form-container button:hover {
          background: #0056b3;
        }

        .error-text {
          color: #ff4d4f;
          font-size: 0.9rem;
        }
      `}</style>
    </form>
  );
}

export default BookingForm;
