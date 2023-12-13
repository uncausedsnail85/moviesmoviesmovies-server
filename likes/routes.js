import * as dao from "./dao.js"

function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {};


    const createUserLikesMovie = async (req, res) => {
        const username = req.params.username;
        const tmdbId = req.params.tmdbId;
        const likes = await dao.createUserLikesMovie(username, tmdbId);
        res.json(likes);
    };
        


    const deleteUserLikesMovie = async (req, res) => {};


    const findUsersThatLikeMovie = async (req, res) => {};


    const findAllMoviesUserLikes = async (req, res) => {};

    app.get("/api/likes", findAllLikes);
    app.post("/api/users/:username/likes/:tmdbId", createUserLikesMovie);
    app.delete("/api/users/:username/likes/:tmdbId", deleteUserLikesMovie); 
    app.get("/api/likes/:tmdbId/users", findUsersThatLikeMovie);
    app.get("/api/users/username/likes", findAllMoviesUserLikes);

}
export default LikesRoutes;