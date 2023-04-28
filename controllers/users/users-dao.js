import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find({});
export const findUser = (uid) => usersModel.find({_id: uid});

export const findUserByEmail = (email) =>
    usersModel.findOne({ email: email });
export const findUserByCredentials = (email, password) =>
    usersModel.findOne({ email: email, password: password });

export const createUser = (user) => usersModel.create(user);
export const updateUser = (uid, user) => usersModel.updateOne({ _id: uid }, user);