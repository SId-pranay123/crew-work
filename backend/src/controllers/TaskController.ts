    // controllers/TaskController.ts
    import asyncHandler from 'express-async-handler';
    import { Request, Response } from 'express';
    import Task from '../models/Task';

    // Get All Tasks
    export const getAllTasks = asyncHandler(async (req: Request, res: Response) => {
        const tasks = await Task.find({ user: req.body.user }).populate('user', 'email fullName');
        res.status(200).json(tasks);
    });

    // Get Tasks by User ID
    export const getTasksByUserId = asyncHandler(async (req: Request, res: Response) => {
        // Assuming user ID comes from URL params or decoded from JWT token if using auth middleware
        const userId = req.params.userId; // or req.user.id if you extract it from a JWT token in auth middleware
    
        const tasks = await Task.find({ user: userId }).populate('user', 'email fullName');
        if (!tasks.length) {
            res.status(404).json({ message: 'No tasks found for this user.' });
            return;
        }
        res.status(200).json(tasks);
    });

    // Create Task
    export const createTask = asyncHandler(async (req: Request, res: Response) => {
        const { title, description, priority, dueDate } = req.body;
        const task = new Task({
            title,
            description,
            priority,
            dueDate,
            user: req.body.user  // Assuming this is provided or derived from session
        });

        await task.save();
        res.status(201).json(task);
    });

    // Update Task
    export const updateTask = asyncHandler(async (req: Request, res: Response) => {
        const task = await Task.findById(req.params.id);

        if (!task) {
            res.status(404);
            throw new Error('Task not found');
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.priority = req.body.priority || task.priority;
        task.dueDate = req.body.dueDate || task.dueDate;

        await task.save();
        res.status(200).json(task);
    });

    // Delete Task
    export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
        const task = await Task.findById(req.params.id);

        if (!task) {
            res.status(404);
            throw new Error('Task not found');
        }

        await task.deleteOne();
        res.status(204).send();
    });
