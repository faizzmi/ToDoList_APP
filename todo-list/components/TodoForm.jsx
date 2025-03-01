"use client";
import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const types = [
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ];

  const validateForm = () => {
    let newErrors = {};
    if (!activity) newErrors.activity = "Activity is required";
    if (!price) newErrors.price = "Price is required";
    if (!type) newErrors.type = "Type is required";
    if (Object.keys(newErrors).length === 3)
      newErrors.general = "Please fill all fields";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});
    setSuccessMessage("");

    setTimeout(() => {
      const newTodo = {
        id: Date.now(),
        activity,
        price: parseFloat(price).toFixed(2),
        type,
        bookingRequired,
        accessibility,
      };
      console.log(newTodo);

      addTodo(newTodo);
      setActivity("");
      setPrice("");
      setType("");
      setBookingRequired(false);
      setAccessibility(0.5);
      setLoading(false); 
      setSuccessMessage("Todo added successfully!");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 border border-gray-300 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <div>
        <label className="block text-gray-700">
          Activity<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter activity"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.activity && <p className="text-red-500 text-sm">{errors.activity}</p>}
      </div>

      <div>
        <label className="block text-gray-700">
          Price (RM)<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      <div>
        <label className="block text-gray-700">
          Type<span className="text-red-500 ml-1">*</span>
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select type</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
      </div>

      <div className="flex justify-between items-center gap-2">
        <label className="text-gray-700">Booking Required</label>
        <input
          type="checkbox"
          checked={bookingRequired}
          onChange={(e) => setBookingRequired(e.target.checked)}
          className="h-5 w-5"
        />
      </div>

      <div>
        <div className="flex justify-between items-center">
          <label className="text-gray-700">Accessibility (0.0 - 1.0)</label>
          <span className="text-sm font-semibold text-blue-600">
            {accessibility}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={accessibility}
          onChange={(e) => setAccessibility(parseFloat(e.target.value))}
          className="mt-2 w-full"
        />
      </div>

      <div className="text-center">
        {errors.general && (
          <p className="text-red-500 text-sm font-semibold">{errors.general}</p>
        )}
        {loading && (
          <p className="text-blue-500 text-sm font-semibold">Adding...</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm font-semibold">{successMessage}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full mt-2 p-2 text-white rounded-md focus:outline-none bg-blue-500 hover:bg-blue-600"
        }`}
      >
         Add Todo
      </button>
    </form>
  );
};
