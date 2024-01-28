const Todo = require("../models/todo");

async function getAllTodos(req, res) {
  //req.user.id = will use to find each user todos
  const { userId } = req.user;

  try {
    const allTodos = await Todo.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(allTodos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function postTodos(req, res) {
  try {
    const { userId } = req.user;
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error("All fields are required");
    }
    const createTodo = await Todo.create({ title, description, userId });
    res.status(200).json(createTodo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function updateTodo(req, res) {
  try {
    const { title, description, isCompleted } = req.body;
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, {
      title,
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

module.exports = { getAllTodos, postTodos, updateTodo, deleteTodos };
