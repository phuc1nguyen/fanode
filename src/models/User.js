import { Model } from 'objection';
import Employee from './Employee.js';
import Role from './Role.js';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'username';
  }

  static get relationMappings() {
    return {
      employee: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'users.employeeNumber',
          to: 'employees.employeeNumber',
        },
      },
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'users.roleId',
          to: 'roles.id',
        },
      },
    };
  }
}

export default User;
