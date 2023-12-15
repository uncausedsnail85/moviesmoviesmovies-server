import model from "./model.js";


export const findAllLikes = () => model.find();

// USER LIKES A MOVIE
export const createUserLikesMovie = async (tmdbId, username) => {
    const existingLike = await model.findOne({ username: username, tmdbId: tmdbId });
    if (existingLike) {
        throw new Error('User has already liked this movie');
    } else {
        return model.create({ username: username, tmdbId: tmdbId });
    }
};

// USER REMOVE LIKE FROM MOVIE
export const deleteUserLikesMovie = (tmdbId, username) =>
    model.deleteOne({ username: username, tmdbId: tmdbId });


// FIND ALL USERS THAT LIKE THE MOVIE
export const findUsernamesThatLikeMovie = (tmdbId) =>
    model.find({ tmdbId: tmdbId }).select('username -_id');
    // select only returns 'username'. -_id removes _id

// FIND ALL THE MOVIES A USER LIKES (FOR HOME PAGE)
export const findAllMoviesUserLikes = (username) =>
    model.find({ username: username }).select('tmdbId -_id');