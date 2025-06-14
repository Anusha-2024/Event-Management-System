import React, { useEffect, useState } from 'react';
import bookingService from '../services/bookingService';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await bookingService.getUserBookings();
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  return (
    <>
      <style>{`
        .bookings-container {
          min-height: 100vh;
          background: url('https://media.istockphoto.com/photos/calendar-on-solid-blue-background-with-copy-space-business-meeting-picture-id1300657889?b=1&k=20&m=1300657889&s=170667a&w=0&h=zXUoBot8i_5K-LaHulWMGgxEzu00IiU9ygEufErSJsg=') no-repeat center center/cover;
          padding: 40px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .bookings-content {
          background: rgba(0, 0, 0, 0.6);
          padding: 40px;
          border-radius: 15px;
          width: 100%;
          max-width: 700px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .bookings-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .bookings-header h2 {
          font-size: 2.5rem;
          color: #f1f1f1;
        }

        .loading-text,
        .no-bookings {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 30px;
          color: #f8f8f8;
        }

        .booking-list {
          margin-top: 20px;
        }

        .booking-item {
          background: rgba(255, 255, 255, 0.15);
          padding: 15px 20px;
          margin-bottom: 15px;
          border-radius: 10px;
          transition: transform 0.3s ease;
          color: #ffffff;
        }

        .booking-item:hover {
          transform: scale(1.03);
          background: rgba(255, 255, 255, 0.25);
        }

        .booking-item p {
          margin: 8px 0;
        }
      `}</style>

      <div className="bookings-container">
        <div className="bookings-content">
          <div className="bookings-header">
            <h2>My Bookings</h2>
          </div>

          {loading ? (
            <p className="loading-text">Loading your bookings...</p>
          ) : bookings.length === 0 ? (
            <p className="no-bookings">You have no bookings.</p>
          ) : (
            <div className="booking-list">
              {bookings.map((booking) => (
                <div key={booking.id} className="booking-item">
                  <p><strong>Event:</strong> {booking.eventTitle}</p>
                  <p><strong>Date:</strong> {new Date(booking.booking_date).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyBookings;
