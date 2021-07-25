import * as dotenv from 'dotenv-safe';

dotenv.config({
  allowEmptyValues: true,
  path: '.env',
});

// eslint-disable-next-line import/prefer-default-export
export const MongoURL =
  process.env.DATABASE_LOCAL || 'mongodb://127.0.0.1:27017/NodeTs';
