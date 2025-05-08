import express from "express";
import { todoController } from "./todo.controller";

const router = express.Router();

router.get("/", todoController.getTodos);
router.get("/:id", todoController.getTodo);
router.put("/:id", todoController.updateTodo);
router.post("/", todoController.addTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
