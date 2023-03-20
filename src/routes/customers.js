import express from 'express';
// import { customerController } from '../controllers/index.js';
import * as customerController from '../controllers/customerController.js';

const router = express.Router();

router.get('/', customerController.index);
router.get('/:id', customerController.detail);
router.get('/create', customerController.create);
router.post('/store', customerController.store);
router.get('/:id/edit', customerController.edit);
router.post('/:id/update', customerController.update);
router.delete('/:id/destroy', customerController.destroy);

export default router;
