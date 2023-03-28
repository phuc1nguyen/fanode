import express from 'express';
import { celebrate } from 'celebrate';
import PERMISSIONS from '../constants/permissions.js';
import { customerController } from '../controllers/index.js';
import { permissionRequired } from '../middlewares/index.js';
import { customerValidator } from '../validators/customerValidator.js';

const router = express.Router();

router.get('/', permissionRequired(PERMISSIONS.CustomersRead), customerController.index);
router.get('/:customerNumber', permissionRequired(PERMISSIONS.CustomersRead), customerController.detail);
router.post(
  '/:customerNumber',
  permissionRequired(PERMISSIONS.CustomersUpdate),
  celebrate(customerValidator.update),
  customerController.update,
);
router.delete('/:customerNumber', permissionRequired(PERMISSIONS.CustomersDelete), customerController.destroy);

export default router;
