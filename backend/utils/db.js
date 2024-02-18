import mongoose from "mongoose";

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.mongo_uri);

        console.log(`Successfully connected to mongoDb:`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;