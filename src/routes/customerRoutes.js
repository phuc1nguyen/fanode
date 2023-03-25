import express from 'express';
import { customerController } from '../controllers/index.js';

const router = express.Router();

router.get('/', customerController.index);
router.get('/:customerNumber', customerController.detail);
router.post('/:customerNumber', customerController.update);
router.delete('/:customerNumber', customerController.destroy);

export default router;
