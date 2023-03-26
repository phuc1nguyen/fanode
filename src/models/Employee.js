import { Model } from 'objection';
import Customer from './Customer.js';
import User from './User.js';

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get idColumn() {
    return 'employeeNumber';
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static get relationMappings() {
    return {
      customers: {
        relation: Model.HasManyRelation,
        modelClass: Customer,
        join: {
          from: 'employees.employeeNumber',
          to: 'customers.salesRepEmployeeNumber',
        },
      },
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        join: {
          from: 'employees.employeeNumber',
          to: 'users.employeeNumber',
        },
      },
    };
  }
}

export default Employee;
