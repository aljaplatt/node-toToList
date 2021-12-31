import query from "../db/index.js";

export async function getAllTasks() {
  const result = query(`SELECT * FROM tasks;`);
  const data = await query(result);
  return data.rows;
}
