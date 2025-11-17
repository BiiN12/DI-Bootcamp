import pg from "pg";
import { config } from "dotenv";

const { Pool } = pg;
config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
