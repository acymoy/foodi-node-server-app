import mongoose from 'mongoose';

const schema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: String,
    dob: {type: Date, default: Date.now},
    avatar: {type: String, default: "https://i.imgur.com/H48R5yU.png"},
    description: String,
    location: String,
    website: String,
    cuisine: String,
    phone: String,
    following: [mongoose.Types.ObjectId],
    followers: [mongoose.Types.ObjectId],
    role: {
        type: String,
        enum: ['ADMIN', 'INDIVIDUAL', 'RESTAURANT'],
    },
}, { collection: 'user' })

export default schema;