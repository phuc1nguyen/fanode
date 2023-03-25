import { getAllUsers } from '../services/userServices.js';

export async function index(req, res) {
  try {
    const users = await getAllUsers();
    if (!users) {
      next(new Error('Users not found'));
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}
