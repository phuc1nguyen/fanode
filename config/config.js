import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || '',
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

Object.entries(config.database.connection).forEach(([name, value]) => {
  if (!value) throw new Error(`Missing config value for ${name}`);
});

export default config;
