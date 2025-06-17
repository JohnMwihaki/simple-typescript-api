import { Router } from "express";
import { createTask, getAllTasks, getSpecificTask, updateTask, deleteTask } from "../controllers/Task.controllers";
import { validatetask } from "../middleware/validatetask";
const router=Router()

router.post("/", validatetask ,createTask);
router.get("/",getAllTasks);
router.get("/:id",getSpecificTask);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);

export default router;