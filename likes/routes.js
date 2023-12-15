import * as dao from "./dao.js"
import { findUserByUsername } from "../mongodb/users/dao.js";

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => { };


    const createUserLikesMovie = async (req, res) => {
        const username = req.params.username;
        const tmdbId = req.params.tmdbId;
        try {
            // find if userexists
            const user = await findUserByUsername(username);
            console.log(JSON.stringify(user));
            // if user dont exist throw error
            if (!user) {
                throw new Error('User does not exist');
            }

            // create like
            const likes = await dao.createUserLikesMovie(tmdbId, username);
            res.json(likes);
        } catch (error) {
            // Handle the error gracefully
            res.status(400).json({ message: error.message });
        }
    };



    const deleteUserLikesMovie = async (req, res) => {
        const username = req.params.username;
        const tmdbId = req.params.tmdbId;
        try {
            await dao.deleteUserLikesMovie(tmdbId, username);
            res.status(200).send({ message: 'Like successfully deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };


    const findUsernamesThatLikeMovie = async (req, res) => {
        const tmdbId = req.params.tmdbId;
        const likes = await dao.findUsernamesThatLikeMovie(tmdbId);
        res.json(likes);
    };


    const findAllMoviesUserLikes = async (req, res) => {
        const username = req.params.username;
        const movies = await dao.findAllMoviesUserLikes(username);
        res.json(movies);
    };

    app.get("/api/likes", findAllLikes);
    app.post("/api/users/:username/likes/:tmdbId", createUserLikesMovie);
    app.delete("/api/users/:username/likes/:tmdbId", deleteUserLikesMovie);
    app.get("/api/likes/:tmdbId/users", findUsernamesThatLikeMovie);
    app.get("/api/users/:username/likes", findAllMoviesUserLikes);

}
export default LikesRoutes;