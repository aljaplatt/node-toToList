import query from "../index.js";
import tasks from "../../task-data.js";

export default async function populateTaskTable() {
  tasks.forEach(async function (item) {
    const task = item.task;
    const data = await query(
      `INSERT INTO tasks (task) VALUES ($1) RETURNING *`,
      [task]
    );
    // return data.rows;
  });
}

populateTaskTable();
