import { PERMS } from '../../constants/index.js';
import { getRoleById } from '../../repositories/index.js';

export function permissionRequired(permission) {
  return async function (req, res, next) {
    // TODO: Implement logic for getting user permissions
    const { user } = req;
    const userRole = await getRoleById(user.roleId);
    const userPermissions = userRole.permissions;

    console.log(user);
    console.log(userRole);
    console.log(userPermissions);

    const [resource] = permission.trim().split(':');
    const fullAccessPermission = `${resource}:FullAccess`;
    let authorized = false;
    for (const userPerm of userPermissions) {
      if (userPerm === permission || userPerm === fullAccessPermission) {
        authorized = true;
        break;
      }
    }
    if (authorized) {
      next();
    } else {
      next(new Error('You are not authorized to perform this action!'));
    }
  };
}
