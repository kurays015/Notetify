const express = require("express");
const router = express.Router();

//controllers
const {
  getAllTodos,
  postTodos,
  updateTodo,
  deleteTodos,
} = require("../controllers/todo");

router.get("/", getAllTodos);

router.post("/", postTodos);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodos);

module.exports = router;
