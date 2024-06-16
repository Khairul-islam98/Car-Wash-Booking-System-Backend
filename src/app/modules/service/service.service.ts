import { IService } from './service.interface';
import { Service } from './service.model';

const createServiceIntoDB = async (payload: IService) => {
  const result = await Service.create(payload);
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};
const getAllServiceFromDB = async () => {
  const result = await Service.find();
  return result;
};
const updateServiceIntoDB = async (id: string, payload: Partial<IService>) => {
  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteServiceFromDB = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
  getAllServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
};
