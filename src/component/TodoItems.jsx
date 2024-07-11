import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask, toggleCompleted } from "../redux/TasksSlice";
import "./TodoItems.css";

const TodoItems = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, newText }));
    setIsEditing(false);
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted({ id: task.id }));
  };

  return (
    <li
      className={`todo-item d-flex justify-content-between align-items-center mt-2 ${
        task.completed ? "completed" : ""
      }`}
    >
      {isEditing ? (
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSave}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-check-lg ms-2"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <svg
            onClick={handleToggleCompleted}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={`bi bi-check-circle align-middle ${
              task.completed ? "text-success" : "text-secondary"
            }`}
            viewBox="0 0 16 16"
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            <path d="M7.98 1a7.002 7.002 0 0 1 5.515 11.33l-4.548-2.876a.5.5 0 0 0-.434 0l-4.548 2.876A7.002 7.002 0 0 1 7.98 1zM2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0z" />
            <path d="M6.904 10.904a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 1 1 1.06 1.06l-3.5 3.5z" />
          </svg>

          <input
            type="text"
            className="form-control"
            value={task.text}
            readOnly
          />
          <div className="d-flex align-items-center">
            <svg
              onClick={handleEdit}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-pencil-square ms-2 text-info"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>

            <svg
              onClick={handleDelete}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-trash3-fill ms-2 text-danger"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItems;
