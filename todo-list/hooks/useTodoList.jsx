"use client";
import React, { useEffect, useState } from "react";

export const useTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTimeout(() => setTodos((prevTodos) => [...prevTodos, todo]), 500);
  };

  const deleteTodo = (id) => {
    setIsLoading(true);

    setTimeout(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      setIsLoading(false);
    }, 2000);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    isLoading,
  };
};
