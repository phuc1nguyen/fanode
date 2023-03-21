// Update with your config settings.
import config from './config/config.js';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    ...config.database,
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations',
    },
    seeds: {
      directory: 'database/seeds',
    },
  },
  production: {
    ...config.database,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};
