import express from 'express';
import * as customerController from '../controllers/customerController.js';

const router = express.Router();

router.get('/', customerController.index);
router.get('/:customerNumber', customerController.detail);
router.post('/:customerNumber', customerController.update);
router.delete('/:customerNumber', customerController.destroy);

export default router;
