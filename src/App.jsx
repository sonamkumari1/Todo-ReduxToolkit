import React from "react";
import TodoAdd from "./component/TodoAdd";
import TodoList from "./component/TodoList";


const App = () => {
  return (
    <div class="container mt-5">
      <h1 class="text-center mb-4">To Do List</h1>
      <div class="row justify-content-center">
        <div class="col-md-6">
        <div className="border rounded p-4">
              <TodoAdd />
              <TodoList />
              </div>
        </div>
      </div>
    </div>
  );
};

export default App;
