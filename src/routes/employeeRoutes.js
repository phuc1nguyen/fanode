import express from 'express';
import PERMISSIONS from '../constants/permissions.js';
import { employeeController } from '../controllers/index.js';
import { permissionRequired } from '../middlewares/index.js';

const router = express.Router();

router.get('/', permissionRequired(PERMISSIONS.EmployeesRead), employeeController.index);
router.get('/:employeeNumber', permissionRequired(PERMISSIONS.EmployeesRead), employeeController.detail);
router.post('/:employeeNumber', permissionRequired(PERMISSIONS.EmployeesUpdate), employeeController.update);
router.delete('/:employeeNumber', permissionRequired(PERMISSIONS.EmployeesDelete), employeeController.destroy);

export default router;
