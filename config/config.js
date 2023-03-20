import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    PORT: process.env.PORT || 3000,
  },
  database: {
    client: 'pg',
    connection: {
      host: process.env.PSQL_HOST || 'localhost',
      user: process.env.PSQL_USER || '',
      password: process.env.PSQL_PASSWORD || '',
      database: process.env.PSQL_DATABASE || '',
      port: Number(process.env.PSQL_PORT) || 5432,
    },
  },
};

export default config;
