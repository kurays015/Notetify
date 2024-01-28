const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      enum: ["Current Todos", "In Progress", "Completed"],
      default: "Current Todos",
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
