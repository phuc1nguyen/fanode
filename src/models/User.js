import { Model } from 'objection';
import Employee from './Employee.js';

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
        relations: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'users.employeeNumber',
          to: 'employees.employeeNumber',
        },
      },
    };
  }
}

export default User;
