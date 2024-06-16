import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Slot } from '../slot/slot.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';
import { User } from '../user/user.model';

const createBookingIntoDB = async (payload: IBooking) => {
  const slot = await Slot.findById(payload.slot);
  if (!slot || slot.isBooked !== 'available') {
    throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not available');
  }

  const user = await User.findById(payload.customer).select(
    '_id name email phone address',
  );
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }

  const booking = await Booking.create(payload);

  slot.isBooked = 'booked';
  await slot.save();

  const result = (
    await (
      await booking.populate({
        path: 'customer',
        select: '_id name email phone address',
      })
    ).populate({
      path: 'service',
      select: '_id name description price duration isDeleted',
    })
  ).populate({
    path: 'slot',
    select: '_id service date startTime endTime isBooked',
  });

  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
