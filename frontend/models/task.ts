// models/Task.ts
export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'ToDo' | 'InProgress' | 'UnderReview' | 'Completed';
    priority: 'Low' | 'Medium' | 'Urgent';
    deadline?: Date;
}
