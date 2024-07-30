"use client"
// components/TaskBoard.tsx
// components/TaskBoard.tsx
import { TaskContext } from '../contexts/TaskContext';
import React, { useContext } from 'react';
import TaskColumn from './TaskColumn'; // Ensure the import path is correct
import { Task } from '@/models/task';

const TaskBoard: React.FC = () => {
  const { tasks } = useContext(TaskContext)!;

  return (
    <div className='grid grid-cols-4 p-4 bg-white rounded-lg'>
      {['To do', 'In progress', 'Under review', 'Finished'].map((status) => (
        <TaskColumn 
            key={status}
            status={status as Task['status']}
            tasks={tasks.filter(task => task.status === status)}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
