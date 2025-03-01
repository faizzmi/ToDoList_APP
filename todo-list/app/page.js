'use client'
import { ToDoForm } from "@/components/TodoForm";
import { ToDoList } from "@/components/TodoList";
import { useTodoList } from "@/hooks/useTodoList";

export default function Home() {
  const { todos, addTodo, deleteTodo } = useTodoList();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">To-Do List</h1>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
        <div className="md:w-1/2">
          <ToDoForm addTodo={addTodo} />
        </div>

        <div className="md:w-1/2">
          <ToDoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
