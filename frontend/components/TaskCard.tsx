// components/TaskCard.tsx
import React from 'react';
import { Task } from '../models/task';  // Ensure this import path is correct based on your project structure

interface TaskCardProps {
    task: Task;
    onDelete: (id: string) => void;  // Function to handle deleting tasks
    onEdit: (task: Task) => void;    // Function to handle editing tasks
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onEdit }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{task.title}</h4>
                <div>
                    <button 
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={() => onEdit(task)}
                    >
                        Edit
                    </button>
                    <button 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => onDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {task.description && <p className="text-gray-700 mt-2">{task.description}</p>}
            <div className="text-sm text-gray-600 mt-1">Priority: {task.priority}</div>
            {task.deadline && <div className="text-sm text-gray-600">Deadline: {new Date(task.deadline).toLocaleDateString()}</div>}
        </div>
    );
};

export default TaskCard;
