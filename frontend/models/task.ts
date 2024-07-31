// models/Task.ts
export interface Task {
    _id: string;
    title: string;
    status: string;
    priority: string;
    deadline?: string;
    description?: string;   
}
