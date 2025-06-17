import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

//Creating a new task
export async function createTask(req: Request, res: Response) {
  try {
    const { title, description, isCompleted } = req.body;
    const new_task = await client.tasks.create({
      data: {
        title,
        description,
        isCompleted
      },
    });
    res.status(201).json({ message: "Task created successfully", new_task });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Something went wrong creating task" });
  }
}

//Getting all tasks
export async function getAllTasks(req: Request, res: Response) {
  try {
    const all_tasks = await client.tasks.findMany({
      where: {
        isDeleted: false,
      },
    });
    res
      .status(200)
      .json({ message: "All tasks fetched successfully", data: all_tasks });
  } catch (e) {
    console.error("Error fetching tasks:", e);
    res.status(500).json({ message: "Something went wrong fetching tasks" });
  }
}
//Getting specific task
export async function getSpecificTask(req: Request, res:Response) {
  try {
    const { id } = req.params;
    const sp_task = await client.tasks.findUnique({
      where: {
        id: String(id),
      },
    });
    if (!sp_task) {
      res.status(404).json({ message: "Task not found" });
    }
    res
      .status(200)
      .json({ message: "Task fetched successfully", data: sp_task });
  } catch (e) {
    console.error("Error fetching specific task:", e);
    res
      .status(500)
      .json({ message: "Something went wrong fetching specific task" });
  }
}

//Updating a task

export async function updateTask(req: Request, res: Response) {
  try {
    const { title, description, isCompleted } = req.body;
    const { id } = req.params;
    const update_task = await client.tasks.update({
      where: { id: String(id) },
      data: {
        title,
        description,
        isCompleted,
      },
    });
    res.status(200).json(update_task);
  } catch (e) {
    console.error("Error updating task:", e);
    res.status(500).json({ message: "Something went wrong updating task" });
  }
}

//deleting a task
export async function deleteTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deleted_task = await client.tasks.update({
      where: { id: String(id) },
      data: { isDeleted: true },
    });
    res
      .status(200)
      .json({ message: "Task deleted successfully", deleted_task });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Something went wrong deleting task" });
  }
}
