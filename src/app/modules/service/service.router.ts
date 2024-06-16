import express from 'express';
import { auth } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidations } from './service.validation';
import { ServiceControllers } from './service.controller';
import { SlotControllers } from '../slot/slot.controller';

const router = express.Router();

router.post(
  '/',
  auth('admin'),
  validateRequest(ServiceValidations.createServiceValidationSchema),
  ServiceControllers.createService,
);
router.get('/:id', ServiceControllers.getSingleService);
router.get('/', ServiceControllers.getAllService);
router.put(
  '/:id',
  auth('admin'),
  validateRequest(ServiceValidations.updateServiceValidationSchema),
  ServiceControllers.updateService,
);
router.delete('/:id', auth('admin'), ServiceControllers.deleteService);

router.post('/slots', auth('admin'), SlotControllers.createSlot);

export const ServiceRoutes = router;
