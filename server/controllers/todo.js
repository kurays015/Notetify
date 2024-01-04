const Todo = require("../models/todo");

async function getAllTodos(req, res) {
  //req.user.id = will use to find each user todos
  // const { userId } = req.user;

  try {
    const allTodos = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function eachTodo(req, res) {
  try {
    const { id } = req.params;
    const findTodoById = await Todo.findById(id);
    res.status(200).json(findTodoById);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function postTodos(req, res) {
  try {
    // const { userId } = req.user;
    const { todo, description } = req.body;
    const createTodo = await Todo.create({ todo, description });
    res.status(200).json(createTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function updateTodo(req, res) {
  try {
    const { todo, description, isCompleted } = req.body;
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      todo,
      description,
      isCompleted,
    });
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

async function deleteTodos(req, res) {
  try {
    const { id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json(deleteTodo);
  } catch (err) {
    res.status(400).json(err.message);
  }
}

module.exports = { getAllTodos, eachTodo, postTodos, updateTodo, deleteTodos };
