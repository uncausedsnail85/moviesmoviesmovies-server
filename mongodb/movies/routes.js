import * as dao from "./dao.js";

function MovieRoutes(app) {

    app.get("/api/movies", async (req, res) => {
        const movies = await dao.findAllMovies();
        console.log("findAllMovies:" + JSON.stringify(movies))
        res.json(movies)
    });

    app.get("/api/create", async (req, res) => {
        let movie =
        {
            "title": "Carol",
            "userLikes": [],
            "casts": [],
            "discussions": [],
            "tmdbId": 258480
        }
        const resMovie = await dao.createMovie(movie);
        res.json(resMovie);
    })

    // TODO: Finish routes
}

export default MovieRoutes;