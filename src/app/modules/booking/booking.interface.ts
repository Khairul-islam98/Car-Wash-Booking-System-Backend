import { Types } from 'mongoose';

export interface IBooking {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  vehicleType:
    | 'car'
    | 'truck'
    | 'SUV'
    | 'van'
    | 'motorcycle'
    | 'bus'
    | 'electricVehicle'
    | 'hybridVehicle'
    | 'bicycle'
    | 'tractor';
  vehicleBrand: string;
  vehicleModel: string;
  manufacturerYear: string;
  registrationPlate: string;
}
