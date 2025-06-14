import FeedbackModel from '../models/feedbackModel.js';

export const submitFeedback = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { eventId, rating, comment } = req.body;
    const feedbackId = await FeedbackModel.createFeedback(userId, eventId, rating, comment);
    res.status(201).json({ feedbackId });
  } catch (error) {
    next(error);
  }
};

export const getFeedbackByEvent = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const feedbacks = await FeedbackModel.getFeedbackByEventId(eventId);
    res.json(feedbacks);
  } catch (error) {
    next(error);
  }
};
