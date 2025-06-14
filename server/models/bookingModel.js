import pool from './db.js';

const BookingModel = {
  createBooking: async (userId, eventId) => {
    const [result] = await pool.execute(
      'INSERT INTO bookings (user_id, event_id) VALUES (?, ?)',
      [userId, eventId]
    );
    return result.insertId;
  },

  getBookingsByUserId: async (userId) => {
    const [rows] = await pool.execute(
      `SELECT b.id, b.booking_date, e.title AS eventTitle
       FROM bookings b
       JOIN events e ON b.event_id = e.id
       WHERE b.user_id = ?`,
      [userId]
    );
    return rows;
  },

  deleteBooking: async (bookingId) => {
    await pool.execute('DELETE FROM bookings WHERE id = ?', [bookingId]);
  },
};

export default BookingModel;
