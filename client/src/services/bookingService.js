import api from './api';

const bookingService = {
  bookEvent: async (eventId, bookingData) => {
    const response = await api.post(`/bookings`, { eventId, ...bookingData });
    return response.data;
  },

  getUserBookings: async () => {
    const response = await api.get('/bookings/my');
    return response.data;
  },
};

export default bookingService;
