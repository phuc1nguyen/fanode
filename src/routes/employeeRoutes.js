import express from 'express';
import * as employeeController from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', employeeController.index);
router.post('/store', employeeController.store);
router.get('/:employeeNumber', employeeController.detail);
router.post('/:employeeNumber', employeeController.update);
router.delete('/:employeeNumber', employeeController.destroy);

export default router;
