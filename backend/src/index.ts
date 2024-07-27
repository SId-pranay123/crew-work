import express, { Request, Response } from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3003;

// app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
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
