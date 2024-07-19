import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../actions/taskActions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask(task.id, description));
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.isDone ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? "Undo" : "Complete"}
      </button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Task;
