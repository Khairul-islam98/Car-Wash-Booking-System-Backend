import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const { serviceId, slotId, ...otherDetails } = req.body;
  const customer = req.user._id;

  const result = await BookingServices.createBookingIntoDB({
    customer,
    service: serviceId,
    slot: slotId,
    ...otherDetails,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successful',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
