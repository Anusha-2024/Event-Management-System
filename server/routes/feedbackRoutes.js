import express from 'express';
import { submitFeedback, getFeedbackByEvent } from '../controllers/feedbackController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, submitFeedback);
router.get('/event/:eventId', getFeedbackByEvent);

export default router;
