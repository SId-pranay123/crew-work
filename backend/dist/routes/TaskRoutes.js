"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/TaskRoutes.ts
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controllers/TaskController");
const router = express_1.default.Router();
router.route('/')
    .get(TaskController_1.getAllTasks)
    .post(TaskController_1.createTask);
router.route('/:id')
    .put(TaskController_1.updateTask)
    .delete(TaskController_1.deleteTask);
// Route to get tasks for a specific user by user ID
router.get('/user/:userId', TaskController_1.getTasksByUserId);
exports.default = router;
