import knex from 'knex';
import config from '../config/config.js';

const myKnex = knex(config.database);

export default myKnex;
