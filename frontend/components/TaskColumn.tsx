// components/TaskColumn.tsx
import React, { useState } from 'react';
import { Task } from '../models/task'; // Assuming Task model is correctly defined
import TaskCard from './TaskCard'; // Ensure the import path is correct
import TaskModal from './TaskModal';

interface TaskColumnProps {
    status: Task['status'];
    tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ status, tasks }) => {
    const [isModalOpen, setModalOpen] = useState(true);
    const [taskType, setTaskType] = useState('To do');

    const handleSaveTask = (taskData: any) => {
        console.log('Task Data:', taskData);
        // Here you would typically send data to the server or update local state
    };

    const handleClick = () => {
        setModalOpen(true);
        setTaskType(status);
    }

    return (
        <div className="mr-6">
            <div className='flex justify-between'>
                <h2 className="text-lg text-[#818081]">{status}</h2>
                <div className='mr-6'>icon</div>
            </div>
            
            <div className="w-full space-y-4">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        // onDelete={() => console.log('Delete task', task.id)} // Placeholder for actual delete function
                        // onEdit={() => console.log('Edit task', task.id)} // Placeholder for actual edit function
                    />
                ))}
            </div>
            <button 
                onClick={handleClick}
                className="bg-gray-800  text-white text-sm px-6 py-2 rounded-lg flex items-center justify-between w-[90%] hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 shadow-md">
                <span>Add new</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
            </button>
            <TaskModal 
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                taskType={taskType}
            />
        </div>
    );
};

export default TaskColumn;
