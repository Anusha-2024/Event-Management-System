import express from 'express';
import {
  createBooking,
  getUserBookings,
  deleteBooking,
} from '../controllers/bookingController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createBooking);
router.get('/my', authenticate, getUserBookings);
router.delete('/:id', authenticate, deleteBooking);

export default router;
