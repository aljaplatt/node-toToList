import query from "../db/index.js";

// GET ALL TASKS
export async function getAllTasks() {
  const data = await query(`SELECT * FROM tasks;`);
  return data.rows;
}

// ADD TASK
export async function addTask(taskObj) {
  const task = taskObj.task;
  const data = await query(`INSERT INTO tasks (task) VALUES $1`, [task]);
  console.log(data.rows);
  return data.rows;
}
