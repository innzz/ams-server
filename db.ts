import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI as string; // Ensure MONGO_URI is a string
    if (!mongoURI) {
      throw new Error('MONGO_URI is not defined in the environment variables');
    }

    const options: ConnectOptions = {
      connectTimeoutMS: 30000, // 30 seconds
    };

    await mongoose.connect(mongoURI, options);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
