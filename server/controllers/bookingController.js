import BookingModel from '../models/bookingModel.js';

export const createBooking = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { eventId } = req.body;
    const bookingId = await BookingModel.createBooking(userId, eventId);
    res.status(201).json({ bookingId });
  } catch (error) {
    next(error);
  }
};

export const getUserBookings = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const bookings = await BookingModel.getBookingsByUserId(userId);
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    const bookingId = req.params.id;
    await BookingModel.deleteBooking(bookingId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
