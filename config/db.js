const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/booksDB");
        console.log("MongoDB is connected");
    } catch (error){
        console.error("MongoDB connection error", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;