// components/TaskColumn.tsx
import React from 'react';
import { Task } from '../models/task'; // Assuming Task model is correctly defined
import TaskCard from './TaskCard'; // Ensure the import path is correct

interface TaskColumnProps {
    status: Task['status'];
    tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks }) => {
    return (
        <div className="task-column bg-white shadow rounded-lg p-4 mb-6">
            <h2 className="task-column-title text-xl font-bold mb-4">{status}</h2>
            <div className="task-list space-y-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onDelete={() => console.log('Delete task', task.id)} // Placeholder for actual delete function
                        onEdit={() => console.log('Edit task', task.id)} // Placeholder for actual edit function
                    />
                ))}
            </div>
            <button 
                className="btn btn-add-task mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => console.log('Add new task')}
            >
                Add new
            </button>
        </div>
    );
};

export default TaskColumn;
