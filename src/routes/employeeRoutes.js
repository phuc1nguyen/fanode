import express from 'express';
import { employeeController } from '../controllers/index.js';

const router = express.Router();

router.get('/', employeeController.index);
router.get('/:employeeNumber', employeeController.detail);
router.post('/:employeeNumber', employeeController.update);
router.delete('/:employeeNumber', employeeController.destroy);

export default router;
