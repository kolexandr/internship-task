import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/eneba"
});