import model from "./model.js";





export const findAllLikes = () => model.find();

// USER LIKES A MOVIE
export const createUserLikesMovie = (tmdbId, username) =>
    model.create({ user: username, tmdbId: tmdbId});

// USER REMOVE LIKE FROM MOVIE
export const deleteUserLikesMovie = (tmdbId, username) =>
    model.deleteOne({ user: username, tmdbId: tmdbId});

// FIND ALL USERS THAT LIKE THE MOVIE
export const findUsersThatLikeMovie = (tmdbId) =>
    model.find( { tmdbId: tmdbId });

// FIND ALL THE MOVIES A USER LIKES (FOR HOME PAGE)
export const findAllMoviesUserLikes = (tmdbId) =>
    model.find( { tmdbId: tmdbId });