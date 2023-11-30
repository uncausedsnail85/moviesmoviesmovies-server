import express from 'express';
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import "dotenv/config";

import MovieRoutes from "./mongodb/movies/routes.js";

// db
mongoose.connect("mongodb://127.0.0.1:27017/moviesmoviesmovies"/* || process.env.DB_CONNECTION_STRING */);

// express
const app = express()
app.use(
    cors({
        origin: process.env.FRONTEND_URL
    })
);
app.use(express.json());

// basic test call
app.get('/testresponse', (req, res) => {
    res.send("OK");
})

MovieRoutes(app);

app.listen(process.env.PORT || 4000);