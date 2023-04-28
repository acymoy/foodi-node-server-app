import mongoose from "mongoose";

const schema = mongoose.Schema({
    name: String,
    user: mongoose.Schema.ObjectId,
    restaurants: [mongoose.Schema.ObjectId],
    date: Date,
    description: String
}, { collection: 'lists' });
