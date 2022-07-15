import 'dotenv/config';

export default {
  type: process.env.CDB_TYPE,
  driver: process.env.CDB_DRIVER,
  host: process.env.CDB_HOST,
  port: process.env.CDB_PORT,
  user: process.env.CDB_USER,
  password: process.env.CDB_PASSWORD,
  schema: process.env.CDB_SCHEMA,
};
