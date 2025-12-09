// Use mock database for demo purposes
// To use real database, set DATABASE_URL and uncomment neon import
// import { neon } from '@neondatabase/serverless';

import mockSQL from './mockDatabase.js';

// For demo: always use mock database
// For production: uncomment below and use DATABASE_URL env variable
/*
const NullishQueryFunction = () => {
  throw new Error(
    'No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set'
  );
};
NullishQueryFunction.transaction = () => {
  throw new Error(
    'No database connection string was provided to `neon()`. Perhaps process.env.DATABASE_URL has not been set'
  );
};
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : NullishQueryFunction;
*/

const sql = mockSQL;

export default sql;