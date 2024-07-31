// routes/TaskRoutes.ts
import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask, getTasksByUserId } from '../controllers/TaskController';

const router = express.Router();

router.route('/')
    .get(getAllTasks)
    .post(createTask);

router.route('/:id')
    .put(updateTask)
    .delete(deleteTask);

// Route to get tasks for a specific user by user ID
router.get('/user/:userId', getTasksByUserId);

export default router;
