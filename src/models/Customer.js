import { Model } from 'objection';
import Employee from './Employee.js';

class Customer extends Model {
  static get tableName() {
    return 'customers';
  }

  static get idColumn() {
    return 'customerNumber';
  }

  static get relationMappings() {
    return {
      employees: {
        relation: Model.BelongsToOneRelation,
        modelClass: Employee,
        join: {
          from: 'customers.salesRepEmployeeNumber',
          to: 'employees.employeeNumber',
        },
      },
    };
  }
}

export default Customer;
