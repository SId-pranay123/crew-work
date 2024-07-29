"use client";
// app/dashboard/page.tsx
import React from 'react';
import TaskBoard from '../../../components/TaskBoard';
import {  useAuth } from '../../../contexts/AuthContext';

const DashboardPage: React.FC = () => {
    function getFirstName(fullName: string|undefined): string {
        if(!fullName) return '';
        // Split the fullName string into an array of words
        const nameParts = fullName.trim().split(" ");
        
        // Return the first element of the array, which is the first name
        return nameParts[0];
    }

    const {user} = useAuth();
  return (
        <div className='p-6'>
          <h1 className='text-3xl p-4'>Good morning, {getFirstName(user?.fullName)}!</h1>
          <TaskBoard />
        </div>
  );
};

export default DashboardPage;
