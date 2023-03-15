const {PERMS} = require('../../constants');

function permissionRequired(permission) {
  return function (req, res, next) {
    // TODO: Implement logic for getting user permissions
    const userPermissions = [PERMS.People_List, PERMS.People_GetOne];

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

module.exports = {permissionRequired};
