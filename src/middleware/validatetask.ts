import { Request, Response, NextFunction } from "express";
export function validatetask(req: Request, res: Response, next: NextFunction) {
  const { title, description, isCompleted } = req.body;
  if (!title) {
    res.status(400).json({ messege: "Titles is required" });
    return;
  }
  if (!description) {
    res.status(400).json({ messege: "Description is required" });
    return;
  }
  if (!isCompleted === undefined) {
    res.status(400).json({ messege: "isCompleted is required" });
    return;
  }
  next();
}
