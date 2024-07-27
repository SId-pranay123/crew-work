"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
// import mongoose from 'mongoose';
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3003;
// app.use(cors());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from TypeScript backend!');
});
// MongoDB connection
// mongoose.connect(process.env.MONGODB_URI as string, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('Failed to connect to MongoDB', err));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
