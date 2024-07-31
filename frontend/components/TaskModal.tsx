"use client";
// components/TaskModal.tsx
import React, { useState, useEffect, useContext, use } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { AuthContext } from '../contexts/AuthContext';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskType: string;
}

const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose,  taskType }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState(taskType); // Ensures the status matches the column
  const [priority, setPriority] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');

  const {addTask, tasks} = useContext(TaskContext)!;
  const {user} = useContext(AuthContext)!;
  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setPriority('');
      setDeadline('');
      setDescription('');
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // addTask({ id: Date.now().toString() , title, status, priority, deadline, description })
    // onClose();
    const taskData = {
      title, 
      status, 
      priority, 
      deadline, 
      description,
      user: user!._id
  };

  try {

    try {
        const response = await fetch('https://crew-work.onrender.com/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token') || ''
            },
            body: JSON.stringify(taskData)
        });
        const newTask = await response.json();
        if (response.ok) {
            addTask(newTask);
        } else {
            // console.error(newTask.message || 'Failed to add task');
            throw new Error(newTask.message || 'Failed to add task');
        }
    } catch (error) {
        console.error('Error adding task:', error);
    }
    onClose();
  } catch (error) {
      console.error('Error adding task:', error);
  }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="bg-white w-full max-w-md p-6 transition-transform duration-300">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Add New Task</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg shadow-sm w-full p-3"
            placeholder="Title"
          />
          <div className="space-y-2">
            <input
              type="text"
              value={status}
              readOnly
              className="border-gray-300 rounded-lg shadow-sm w-full p-3"
              placeholder="Status"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="border-gray-300 rounded-lg shadow-sm w-full p-3"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Urgent">Urgent</option>
            </select>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="border-gray-300 rounded-lg shadow-sm w-full p-3"
              placeholder="Deadline"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-gray-300 rounded-lg shadow-sm w-full p-3"
              placeholder="Description"
            />
          </div>
          <button type="submit" className="bg-[#3B2B9F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full">Save</button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
