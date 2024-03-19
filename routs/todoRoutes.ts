import express from "express";

import { getAllTodos, addTodo } from "../controllers/todoController";

const router = express.Router();

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllTodos).post(addTodo);

// localhost:8000/todos/:id
// router.route("/:id").get(getAllTodos);

export default router;