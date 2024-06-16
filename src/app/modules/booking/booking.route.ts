import express from 'express';
import { BookingControllers } from './booking.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post('/', auth('user'), BookingControllers.createBooking);

export const BookingRoutes = router;
