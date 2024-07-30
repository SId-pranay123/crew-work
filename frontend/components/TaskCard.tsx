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

    const hadleEdit = (task: Task) => {
        if(task.status === 'To do'){
            moveTask(task.id, 'In progress')
        }else if(task.status === 'In progress'){
            moveTask(task.id, 'Under review')
        }else if(task.status === 'Under review'){
            moveTask(task.id, 'Finished')
        }else {
            deleteTask(task.id)
        }
        // moveTask(task.id, 'In progress')
    }

    const {moveTask, deleteTask} = useContext(TaskContext)!;
    return (
        <div className="bg-[#F8F8F9] border-black rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">{task.title}</h4>
                <div>
                    {task.status !== 'Finished' && 
                    <button 
                        className="text-blue-500 hover:text-blue-700 mr-2"
                        onClick={hadleEdit.bind(null, task)}
                    >
                        Move
                    </button>}
                    <button 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteTask(task.id)}
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
