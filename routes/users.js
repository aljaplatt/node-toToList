import express from "express";

import { getAllTasks } from "../models/tasks.js";

const router = express.Router();

/* GET ALL TASKS */
router.get("/", function (req, res, next) {
  const tasks = getAllTasks();
  res.json({
    success: true,
    message: "Here are your tasks",
    payload: tasks,
  });
});

export default router;
