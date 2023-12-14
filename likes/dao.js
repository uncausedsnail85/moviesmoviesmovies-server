import model from "./model.js";
import { findUserByUsername } from "../mongodb/users/dao.js";




export const findAllLikes = () => model.find();

// USER LIKES A MOVIE
export const createUserLikesMovie = async (tmdbId, username) => {
    const user = await findUserByUsername(username); // use this to get user object
    const userId = user._id  // use this to get user Id
    // console.log(`userId: ${userId}`);
    // console.log(`userId: ${userId._id}`);
    model.create({ userId: userId, username: username, tmdbId: tmdbId });
}
// USER REMOVE LIKE FROM MOVIE
export const deleteUserLikesMovie = (tmdbId, username) =>
    model.deleteOne({ userId: username, tmdbId: tmdbId });

// FIND ALL USERS THAT LIKE THE MOVIE
export const findUsernamesThatLikeMovie = (tmdbId) =>
    model.find({ tmdbId: tmdbId }).select('username -_id');
    // select only returns 'username'. -_id removes _id

// FIND ALL THE MOVIES A USER LIKES (FOR HOME PAGE)
export const findAllMoviesUserLikes = (username) =>
    model.find({ username: username }).select('tmdbId -_id');