import mongoose, { Schema } from 'mongoose';
import { ISlot } from './slot.interface';

const slotSchema = new Schema<ISlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ['available', 'booked', 'cancelled'],
    },
  },
  {
    timestamps: true,
  },
);

export const Slot = mongoose.model<ISlot>('Slot', slotSchema);
