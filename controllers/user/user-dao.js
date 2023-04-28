import userModel from './user-model.js';

export const findUser = (uid) => userModel.find({_id: uid});
export const updateUser = (uid, profile) => userModel.updateOne({_id: uid}, profile);
export const createUser = (user) => userModel.create(user);
export const findAllUsers = () => {
    userModel.find({});
}
export const findArrayOfUsers = (uids) => userModel.find({_id: {$in: uids}});