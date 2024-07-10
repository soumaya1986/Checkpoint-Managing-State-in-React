// src/components/TaskItem.js
import React, { useState } from "react";

function TaskItem({ task, editTask, deleteTask, toggleTaskCompletion }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedTask.name && editedTask.description) {
      editTask(editedTask);
      setIsEditing(false);
    } else {
      alert("Both fields are required");
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            name="name"
            value={editedTask.name}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
          ></textarea>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <div className="task-details">
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <div className="task-actions">
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
