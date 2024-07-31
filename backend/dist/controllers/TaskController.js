"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getTasksByUserId = exports.getAllTasks = void 0;
// controllers/TaskController.ts
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Task_1 = __importDefault(require("../models/Task"));
// Get All Tasks
exports.getAllTasks = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield Task_1.default.find({ user: req.body.user }).populate('user', 'email fullName');
    res.status(200).json(tasks);
}));
// Get Tasks by User ID
exports.getTasksByUserId = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Assuming user ID comes from URL params or decoded from JWT token if using auth middleware
    const userId = req.params.userId; // or req.user.id if you extract it from a JWT token in auth middleware
    const tasks = yield Task_1.default.find({ user: userId }).populate('user', 'email fullName');
    if (!tasks.length) {
        res.status(404).json({ message: 'No tasks found for this user.' });
        return;
    }
    res.status(200).json(tasks);
}));
// Create Task
exports.createTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, priority, dueDate } = req.body;
    const task = new Task_1.default({
        title,
        description,
        priority,
        dueDate,
        user: req.body.user // Assuming this is provided or derived from session
    });
    yield task.save();
    res.status(201).json(task);
}));
// Update Task
exports.updateTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.priority = req.body.priority || task.priority;
    task.dueDate = req.body.dueDate || task.dueDate;
    yield task.save();
    res.status(200).json(task);
}));
// Delete Task
exports.deleteTask = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task_1.default.findById(req.params.id);
    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }
    yield task.deleteOne();
    res.status(204).send();
}));
