// src/components/TaskForm.js
import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      addTask(task);
      setTask({ name: "", description: "" });
    } else {
      alert("Both fields are required");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
