import EventModel from '../models/eventModel.js';
import BookingModel from '../models/bookingModel.js';
import FeedbackModel from '../models/feedbackModel.js';

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await EventModel.getAllEvents();
    res.json(events);
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    // For simplicity, get all bookings with event and user info
    // This would require a new model method or raw query
    // Here, just returning empty array as placeholder
    res.json([]);
  } catch (error) {
    next(error);
  }
};

export const getAllFeedback = async (req, res, next) => {
  try {
    // Similarly, get all feedback with user and event info
    res.json([]);
  } catch (error) {
    next(error);
  }
};
