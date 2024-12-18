import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log("Database is connected");
    } catch (error: any) {
        // console.log(process.env.MONGO_URI);
        console.log(error.message);
    }
}

export default connectDB;