import React from 'react';
import { useSelector } from 'react-redux';
import TodoItems from './TodoItems';

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group rounded-0">
      {tasks.map((task) => (
        <TodoItems key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
