"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    priority: {
        type: String,
        enum: ['Urgent', 'Medium', 'Low'],
        default: 'Low',
    },
    status: {
        type: String,
        enum: ['To do', 'In progress', 'Under review', 'Finished'],
        default: 'To do',
    },
    dueDate: {
        type: Date,
        required: false,
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});
const Task = mongoose_1.default.model("Task", TaskSchema);
exports.default = Task;
