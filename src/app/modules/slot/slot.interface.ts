import { Types } from 'mongoose';

export interface ISlot {
  service: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: 'available' | 'booked' | 'cancelled';
}
