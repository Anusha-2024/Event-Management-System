import pool from './db.js';

const EventModel = {
  getAllEvents: async () => {
    const [rows] = await pool.execute('SELECT * FROM events ORDER BY date ASC');
    return rows;
  },

  getEventById: async (id) => {
    const [rows] = await pool.execute('SELECT * FROM events WHERE id = ?', [id]);
    return rows[0];
  },

  createEvent: async (eventData) => {
    const { title, description, location, date, image_url } = eventData;
    const [result] = await pool.execute(
      'INSERT INTO events (title, description, location, date, image_url) VALUES (?, ?, ?, ?, ?)',
      [title, description, location, date, image_url]
    );
    return result.insertId;
  },

  updateEvent: async (id, eventData) => {
    const { title, description, location, date, image_url } = eventData;
    await pool.execute(
      'UPDATE events SET title = ?, description = ?, location = ?, date = ?, image_url = ? WHERE id = ?',
      [title, description, location, date, image_url, id]
    );
  },

  deleteEvent: async (id) => {
    await pool.execute('DELETE FROM events WHERE id = ?', [id]);
  },
};

export default EventModel;
