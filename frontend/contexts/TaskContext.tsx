"use client";
// contexts/TaskContext.tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Task } from '../models/task';
import { AuthContext } from './AuthContext';

export interface TaskContextType {
    tasks: Task[];
    fetchTasksByUserId: (userId: string) => void;
    addTask: (task: Task) => void;
    updateTask: (id: string, task: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    moveTask: (taskId: string, newStatus: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const {user} = useContext(AuthContext);
    // Function to fetch tasks by user ID
    const fetchTasksByUserId = async (userId: string) => {
        try {
            const response = await fetch(`https://crew-work.onrender.com/api/tasks/user/${userId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token') || ''  // Ensure to include authorization
                }
            });
            const data = await response.json();
            if (response.ok) {
                setTasks(data);
            } else {
                throw new Error(data.message || 'Failed to fetch tasks');
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Function to add a new task
    const addTask = async (task: Task) => {
        // const taskData = {
        //     ...task,
        //     user: user!._id  // Ensure you have the user's ID here
        // };

        // console.log('user Data:', user);

        // console.log('Task Data:', taskData);
        // try {
        //     const response = await fetch('https://crew-work.onrender.com/api/tasks', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': localStorage.getItem('token') || ''
        //         },
        //         body: JSON.stringify(taskData)
        //     });
        //     const newTask = await response.json();
        //     if (response.ok) {
        //         setTasks([...tasks, newTask]);
        //     } else {
        //         // console.error(newTask.message || 'Failed to add task');
        //         throw new Error(newTask.message || 'Failed to add task');
        //     }
        // } catch (error) {
        //     console.error('Error adding task:', error);
        // }
        setTasks([...tasks, task]);
    };

    // Function to update a task
    const updateTask = async (id: string, updatedTask: Partial<Task>) => {
        // try {
        //     const response = await fetch(`https://crew-work.onrender.com/api/tasks/${id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': localStorage.getItem('token') || ''
        //         },
        //         body: JSON.stringify(updatedTask)
        //     });
        //     const updatedData = await response.json();
        //     if (response.ok) {
        //         setTasks(tasks.map(task => task._id === id ? { ...task, ...updatedData } : task));
        //     } else {
        //         throw new Error(updatedData.message || 'Failed to update task');
        //     }
        // } catch (error) {
        //     console.error('Error updating task:', error);
        // }

        setTasks(tasks.map(task => task._id === id ? { ...task, ...updatedTask } : task));
    };

    // Function to delete a task
    const deleteTask = async (id: string) => {
        // try {
        //     const response = await fetch(`https://crew-work.onrender.com/api/tasks/${id}`, {
        //         method: 'DELETE',
        //         headers: {
        //             'Authorization': localStorage.getItem('token') || ''
        //         }
        //     });
        //     if (response.ok) {
        //         setTasks(tasks.filter(task => task._id !== id));
        //     } else {
        //         const errorData = await response.json();
        //         throw new Error(errorData.message || 'Failed to delete task');
        //     }
        // } catch (error) {
        //     console.error('Error deleting task:', error);
        // }
        setTasks(tasks.filter(task => task._id !== id));
    };

    const moveTask = async (taskId: string, status: string) => {
        // const taskToUpdate = tasks.find(task => task._id === taskId);
        // if (!taskToUpdate) {
        //     console.error('Task not found');
        //     return;
        // }
    
        // try {
        //     const updatedTaskData = { ...taskToUpdate, status: newStatus };
        //     const response = await fetch(`https://crew-work.onrender.com/api/tasks/${taskId}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': localStorage.getItem('token') || ''
        //         },
        //         body: JSON.stringify(updatedTaskData)
        //     });
    
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
    
        //     const updatedTask = await response.json();
        //     setTasks(tasks.map(task => task._id === taskId ? updatedTask : task));
        // } catch (error) {
        //     console.error('Error moving task:', error);
        // }
        setTasks(tasks.map(task => task._id === taskId ? { ...task, status } : task));
        console.log(tasks);

    };

    return (
        <TaskContext.Provider value={{ tasks, fetchTasksByUserId, addTask, updateTask, deleteTask, moveTask }}>
            {children}
        </TaskContext.Provider>
    );
};

