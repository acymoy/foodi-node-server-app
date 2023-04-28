import mongoose from "mongoose";
import usersSchema from "../user/user-schema.js";

const usersModel = mongoose.model("UsersModel", usersSchema);

export default usersModel;