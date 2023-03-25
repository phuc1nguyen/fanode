import express from 'express';
import { userController, authController } from '../controllers/index.js';

const router = express.Router();

router.get('/', userController.index);
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
