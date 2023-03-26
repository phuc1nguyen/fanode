import { Model } from 'objection';
import User from './User.js';

class Role extends Model {
  static get tableName() {
    return 'roles';
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'roles.id',
          to: 'users.roleId',
        },
      },
    };
  }
}

export default Role;
