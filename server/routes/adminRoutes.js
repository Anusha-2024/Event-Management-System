import express from 'express';
import { getAllEvents, getAllBookings, getAllFeedback } from '../controllers/adminController.js';
import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authenticate);
router.use(authorizeAdmin);

router.get('/events', getAllEvents);
router.get('/bookings', getAllBookings);
router.get('/feedback', getAllFeedback);

export default router;
