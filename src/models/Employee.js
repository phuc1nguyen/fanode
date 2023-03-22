import { Model } from 'objection';
import Customer from './Customer.js';

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get idColumn() {
    return 'employeeNumber';
  }

  static get relationMappings() {
    return {
      customers: {
        relations: Model.HasManyRelation,
        modelClass: Customer,
        join: {
          from: 'employees.employeeNumber',
          to: 'customers.salesRepEmployeeNumber',
        },
      },
    };
  }
}

export default Employee;
