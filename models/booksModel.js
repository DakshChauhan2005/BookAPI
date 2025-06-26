const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/booksDB");


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book" , bookSchema)