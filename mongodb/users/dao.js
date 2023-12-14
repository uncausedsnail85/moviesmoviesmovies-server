import model from "./model.js";

export const findAllUsers = () => model.find();




export const findUserById = (id) => model.findById(id);
export const findUserByUsername = (username) => model.findOne({ username: username });

export const findUserByCredentials = (username, password) => model.findOne({ username: username, password: password });

export const findUsersByRole = (role) => model.find({role: role});

export const updateUser = (username, user) =>
    model.updateOne({ username: username }, { $set: user });

// export const createUser = () => model.find();
// export const updateUser = () => model.find();
// export const deleteUser = () => model.find();
// export const  = () => model.find();






export const createUser = (user) => model.create(user);