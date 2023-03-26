import { userServices } from '../../services/index.js';

export function permissionRequired(permission) {
  console.log(permission);
  return async function (req, res, next) {
    // TODO: Implement logic for getting user permissions
    const user = req.user;
    console.log(user);
    const userRole = await userServices.getUserRole(user.username);
    const userPermissions = userRole.permissions;

    console.log(user);
    console.log(userRole);
    console.log(userPermissions);

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

export function roleRequired(role) {
  return async function (req, res, next) {};
}
