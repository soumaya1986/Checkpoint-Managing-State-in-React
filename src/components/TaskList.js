// src/components/TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, editTask, deleteTask, toggleTaskCompletion }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
