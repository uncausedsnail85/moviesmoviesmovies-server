import * as dao from "./dao.js"

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {};


    const createUserLikesMovie = async (req, res) => {
        const username = req.params.username;
        const tmdbId = req.params.tmdbId;
        const likes = await dao.createUserLikesMovie(tmdbId, username);
        res.json(likes);
    };
        


    const deleteUserLikesMovie = async (req, res) => {};


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