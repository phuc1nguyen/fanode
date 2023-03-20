import { Model } from 'objection';

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }
}

export default Employee;
