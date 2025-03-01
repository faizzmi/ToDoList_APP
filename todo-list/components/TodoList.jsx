import React from "react";
import { TodoItem } from "./TodoItem";

export const ToDoList = ({ todos, deleteTodo, isLoading }) => {

    console.log(isLoading);
  return (
    <div className="md:mt-0 sm:mt-8">
      <h2 className="text-xl font-semibold mb-4">Total Todos: {todos.length}</h2>

      {isLoading ? (
        <div className="flex justify-center items-center py-4">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </ul>
      )}
    </div>
  );
};
