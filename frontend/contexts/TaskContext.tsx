"use client";
// contexts/TaskContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../models/task';

export interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    moveTask: (id: string, status: Task['status']) => void;
    deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType >({
    tasks: [],
    addTask: () => {},  // Provide a no-op function or suitable default behavior
    moveTask: () => {},
    deleteTask: () => {}
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const moveTask = (id: string, status: Task['status']) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, moveTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

