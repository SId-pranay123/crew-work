import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { notFound, errorHandler } from './middlewares/ErrorMiddleware';
import UserRoutes from './routes/UserRoutes';
import cors from 'cors';

const app: Application = express();

dotenv.config();

// console.log(process.env.MONGODB_URI);

connectDB();

app.use(express.json());
app.use(cors());


// Default
app.get("/api", (req: Request, res: Response) =>  {
    res.status(201).json({ message: "Welcome to Auth ts" });
})

// User Route
app.use("/api/auth", UserRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3002;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));