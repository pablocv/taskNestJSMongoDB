import * as mongoose from 'mongoose'

export const BookSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    year: Number,
    authors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'authors'
    }],
    publisher: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'publisher'
    }
});