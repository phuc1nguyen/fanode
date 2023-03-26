import { userServices } from '../services/index.js';

export async function index(req, res, next) {
  try {
    const users = await userServices.getUsers();
    if (!users) {
      next(new Error('Users not found'));
    }
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

export async function destroy(req, res, next) {
  try {
    await userServices.destroyUser(req.params.username);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
}
