import { userServices } from '../../services/index.js';

export function permissionRequired(permission) {
  return async function (req, res, next) {
    const user = req.user;
    const userRole = await userServices.getUserRole(user.username);
    if (!userRole) {
      return next(new Error('This user does not have any role'));
    }
    const userPermissions = userRole.permissions;

    const [resource] = permission.trim().split(':');
    const fullAccessPermission = `${resource}:FullAccess`;
    let authorized = false;
    authorized = userPermissions.includes(permission) || userPermissions.includes(fullAccessPermission);

    if (authorized) {
      return next();
    } else {
      return next(new Error('You are not authorized to perform this action!'));
    }
  };
}
