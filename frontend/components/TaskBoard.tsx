"use client"
// components/TaskBoard.tsx
import { TaskContext } from '../contexts/TaskContext';
import React, {useContext} from 'react';
// import { TaskColumn } from './TaskColumn';


const TaskBoard: React.FC = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* {['ToDo', 'InProgress', 'UnderReview', 'Completed'].map((status) => (
        <TaskColumn key={status} status={status as Task['status']} tasks={tasks.filter(task => task.status === status)} />
      ))} */}
      This is task board : {JSON.stringify(tasks)}
    </div>
  );
};

export default TaskBoard;
