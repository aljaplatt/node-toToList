import pg from "pg";

const pool = new pg.Pool({
  user: "cmluzpspradeqj",
  host: "ec2-176-34-105-15.eu-west-1.compute.amazonaws.com",
  database: "d735b9fhe0uio",
  password: "9632127db6cec3941c3435c845f3f59afa654f65937fa2670ba7ad5edb905940",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default async function query(text, params) {
  return pool.query(text, params);
}
