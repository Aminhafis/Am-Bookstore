import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },quantity: {
        type: Number,
        required: true
    }
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'categories', // Ensure this matches your category model name
    //     required: true
    // }
});

const booksModel = mongoose.model('Books', bookSchema);

export default booksModel
