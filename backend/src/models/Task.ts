import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface ITask extends mongoose.Document {
    title: string,
    description: string,
    priority: string,
    status: string,
    dueDate: Date,
    user: mongoose.Schema.Types.ObjectId,  // Reference to User
    createdAt?: Date,
    updatedAt?: Date
}

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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
