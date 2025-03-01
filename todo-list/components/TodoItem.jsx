import React, { useState } from "react";

export const TodoItem = ({ todo, deleteTodo }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
    setShowConfirm(false);
  };

  return (
    <li className="flex justify-between items-center p-4 border border-gray-300 rounded-lg shadow-sm mb-4">
      <div>
        <strong className="truncate max-w-[200px] block overflow-hidden whitespace-nowrap">{todo.activity}</strong>
        RM{todo.price} ({todo.type})
        {todo.bookingRequired && (
          <span className="ml-2 text-sm text-green-500">Booking Required</span>
        )}
        <div className="text-sm text-gray-600">
          Accessibility: {todo.accessibility}
        </div>
      </div>
      <button
        onClick={() => setShowConfirm(true)}
        className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold">Confirm Deletion</h3>
            <p className="text-gray-600 mt-2">
              Are you sure you want to delete this todo?
            </p>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
