import express from "express";

import { getAllTasks, addTask } from "../models/tasks.js";

const router = express.Router();

/* GET ALL TASKS */
router.get("/", async function (req, res, next) {
  const tasks = await getAllTasks();
  res.json({
    success: true,
    message: "Here are your tasks",
    payload: tasks,
  });
});

// ADD A NEW TASK
router.post("/", async function (req, res) {
  const newTask = req.body;
  const data = await addTask(newTask);
  res.json({
    success: true,
    message: "You have added a new task",
    payload: data,
  });
});

// DELETE TASK by ID
// export default async function deleteData() {
//   const sqlString = `DELETE FROM quotes RETURNING *`;
//   const data = await query(sqlString);
//   console.log(data.rows);
//   return data.rows;
// }

export default router;
