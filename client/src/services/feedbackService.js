import api from './api';

const feedbackService = {
  submitFeedback: async (eventId, feedbackData) => {
    const response = await api.post(`/feedback`, { eventId, ...feedbackData });
    return response.data;
  },

  getEventFeedback: async (eventId) => {
    const response = await api.get(`/feedback/event/${eventId}`);
    return response.data;
  },
};

export default feedbackService;
