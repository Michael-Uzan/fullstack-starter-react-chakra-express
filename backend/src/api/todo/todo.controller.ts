import { Request, Response } from "express";

const todoService = require("./todo.service");
const logger = require("../../services/logger.service");

async function getTodos(req: Request, res: Response) {
  try {
    const todos = await todoService.query();
    res.send(todos);
  } catch (err) {
    logger.error("Failed to get todos", err);
    res.status(500).send({ err: "Failed to get todos" });
  }
}

async function getTodo(req: Request, res: Response) {
  try {
    const todo = await todoService.getById(req.params.id);
    res.send(todo);
  } catch (err) {
    logger.error("Failed to get todo", err);
    res.status(500).send({ err: "Failed to get todo" });
  }
}

async function deleteTodo(req: Request, res: Response) {
  try {
    await todoService.remove(req.params.id);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete todo", err);
    res.status(500).send({ err: "Failed to delete todo" });
  }
}

async function updateTodo(req: Request, res: Response) {
  try {
    const todo = req.body;
    const savedTodo = await todoService.update(todo);
    res.send(savedTodo);
  } catch (err) {
    logger.error("Failed to update todo", err);
    res.status(500).send({ err: "Failed to update todo" });
  }
}

async function addTodo(req: Request, res: Response) {
  try {
    const todo = req.body;
    const addedTodo = await todoService.add(todo);
    res.send(addedTodo);
  } catch (err) {
    logger.error("Failed to add todo", err);
    res.status(500).send({ err: "Failed to add todo" });
  }
}

module.exports = {
  getTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  addTodo,
};
