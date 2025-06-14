import React, { useState } from 'react';
import eventService from '../services/eventService';

function FeedbackForm({ eventId, onFeedbackSubmitted }) {
  const [feedback, setFeedback] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await eventService.submitFeedback(eventId, { feedback });
      onFeedbackSubmitted();
      setFeedback('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your feedback..."
        value={feedback}
        required
        onChange={(e) => setFeedback(e.target.value)}
        rows="4"
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Feedback'}
      </button>
      {error && <p className="error-text">{error}</p>}

      <style>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .form-container textarea {
          padding: 0.8rem 1rem;
          width: 100%;
          max-width: 400px;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.9);
          color: #333;
          resize: none;
        }

        .form-container button {
          background: #28a745;
          color: white;
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .form-container button:hover {
          background: #1e7e34;
        }

        .error-text {
          color: #ff4d4f;
          font-size: 0.9rem;
        }
      `}</style>
    </form>
  );
}

export default FeedbackForm;
