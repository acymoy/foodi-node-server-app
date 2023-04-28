import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: String,
    dob: {type: Date, default: Date.now},
    avatar: String,
    description: String,
    location: String,
    following: [mongoose.Types.ObjectId],
    followers: [mongoose.Types.ObjectId],
    role: {
        type: String,
        enum: ['ADMIN', 'INDIVIDUAL', 'RESTAURANT'],
    },
}, {collection: 'user'});

export default usersSchema;