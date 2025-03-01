import React from 'react'
import { TodoItem } from './TodoItem'

export const ToDoList = ({ todos, deleteTodo }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Total Todos: {todos.length}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  )
}
