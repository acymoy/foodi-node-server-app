import postsModel from './posts-model.js';

//var ObjectId = require('mongoose').Types.ObjectID;

export const findPosts = () => postsModel.find();
export const findUserPost = (userID) => postsModel.find({ user: userID });
// followed is an array of user IDs
export const findFollowedPosts = (followed) =>
    postsModel.find({ user: { $in: followed } });


export const createPost = (post) => postsModel.create(post);
export const deletePost = (id) => postsModel.deleteOne({ _id: id });