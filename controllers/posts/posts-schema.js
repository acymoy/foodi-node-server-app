import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    user: mongoose.Schema.ObjectId,
    restaurant: mongoose.Schema.ObjectId,
    name: String,
    restaurantName: {type: String, default: 'https://i.imgur.com/H48R5yU.png'},
    userAvatar: {type: String, default: 'https://i.imgur.com/H48R5yU.png'},
    restaurantAvatar: String,
    text: String,
    likes: Number,
    rating: Number,
    date: Date,
}, { collection: 'post' });

export default schema;