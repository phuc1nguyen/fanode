import express from 'express';
import { userController, authController } from '../controllers/index.js';

const router = express.Router();

router.get('/', userController.index);
router.delete('/:username', userController.destroy);
// TODO: create route for setting user role, but must be 'president' to access

router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
