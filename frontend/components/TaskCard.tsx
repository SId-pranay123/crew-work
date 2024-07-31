// components/TaskCard.tsx
import React, {useContext} from 'react';
import { Task } from '../models/task';  // Ensure this import path is correct based on your project structure
import { TaskContext } from '../contexts/TaskContext';


interface TaskCardProps {
    task: Task;
    // onDelete: (id: string) => void;  // Function to handle deleting tasks
    // onEdit: (task: Task) => void;    // Function to handle editing tasks
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    // const hadleEdit = (task: Task) => {
       
    // }

    const handleDelete = (task: Task) => {
        console.log('Delete task:', task);
        deleteTask(task._id!);
    }

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("text/plain", task._id!);
    };

    const { deleteTask} = useContext(TaskContext)!;
    return (
        <div className="bg-[#F8F8F9] border-black rounded-lg p-4 mb-4" draggable="true"
        onDragStart={handleDragStart} >
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{task.title}</h4>
                <div>
                    {/* {task.status !== 'Finished' && 
                    <button 
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={hadleEdit.bind(null, task)}
                    >
                        Edit
                    </button>} */}
                    <button 
                        className="text-red-500 hover:text-red-700"
                        onClick={handleDelete.bind(null, task)}
                    >
                        Delete
                    </button>
                </div>
            </div>
            {task.description && <p className="text-gray-700 mt-2">{task.description}</p>}
            <div className={`text-sm ${task.priority === 'Urgent' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'} text-white rounded-sm text-center w-2/5 mt-1`}>{task.priority}</div>
            {task.deadline && 
                <div className="text-sm py-2 flex items-center  text-gray-600">
                    <div className='pr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={12} height={12}>
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>  
                    </div>
                        {new Date(task.deadline).toLocaleDateString()}
                </div>}
        </div>
    );
};

export default TaskCard;
