import express from 'express';
import { BookingControllers } from './booking.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/bookings', auth('user'), BookingControllers.createBooking);
router.get('/bookings', auth('admin'), BookingControllers.getAllBooking);
router.get('/my-bookings', auth('user'), BookingControllers.getMyBooking);

export const BookingRoutes = router;
