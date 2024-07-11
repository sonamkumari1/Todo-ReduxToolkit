import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/TasksSlice";

const TodoAdd = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3 align-items-center">
      <input
        type="text"
        className="form-control me-2"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </form>
  );
};

export default TodoAdd;
