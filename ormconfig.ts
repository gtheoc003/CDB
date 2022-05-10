import 'dotenv/config';

export default {
    host: process.env.CDB_HOST,
    port: Number(process.env.CDB_PORT),
    user: process.env.CDB_USER,
    password: process.env.CDB_PASSWORD,
    schema: process.env.CDB_SCHEMA,
}