import QueryBuilder from '../../builder/QueryBuilder';
import { Service } from '../service/service.model';
import { ISlot } from './slot.interface';
import { Slot } from './slot.model';

const createSlotIntoDB = async (payload: ISlot) => {
  const { service, startTime, endTime, date } = payload;

  const timeToMinute = (time: string): number => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  };
  const minuteToTime = (minute: number): string => {
    const hour = Math.floor(minute / 60);
    const mins = minute % 60;
    return `${String(hour).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  };
  const slots = [];
  const serviceInfo = await Service.findById(service);
  const serviceDuration = serviceInfo?.duration;
  const startTimeMinute = timeToMinute(startTime);
  const endTimeMinute = timeToMinute(endTime);

  for (
    let time = startTimeMinute;
    time < endTimeMinute;
    time += serviceDuration as number
  ) {
    for (
      let time = startTimeMinute;
      time < endTimeMinute;
      time += serviceDuration as number
    ) {
      const slotStartTime = minuteToTime(time);
      let slotEndTimeMin = time + Number(serviceDuration);
      if (slotEndTimeMin > endTimeMinute) {
        slotEndTimeMin = endTimeMinute;
      }
      const slotEndTime = minuteToTime(slotEndTimeMin);
      const slot = new Slot({
        service,
        date,
        startTime: slotStartTime,
        endTime: slotEndTime,
        isBooked: 'available',
      });
      slots.push(slot);
      await slot.save();
    }
    return slots;
  }
};
const getAvailableSlotsFromDB = async (query: Record<string, unknown>) => {
  const queryAvailableSlot = new QueryBuilder(Slot.find(), query).filter();

  const result = await queryAvailableSlot.modelQuery;
  return result;
};

export const SlotServices = {
  createSlotIntoDB,
  getAvailableSlotsFromDB,
};
