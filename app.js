import express from 'express';
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import "dotenv/config";

import MovieRoutes from "./mongodb/movies/routes.js";
import UserRoutes from './mongodb/users/routes.js';
// new comment -sw
// db
mongoose.connect(process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/moviesmoviesmovies" );

// express
const app = express()
app.use(
    cors({
        credentials: true, // support cookies
        origin: function (origin, callback) {
            // callback to set origin dynamically. for supporting multiple endpoints
            if (!origin) return callback(null, true);

            if (process.env.FRONTEND_URLS.split(" ").indexOf(origin) === -1) {
                var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);
app.use(express.json());

// basic test call
app.get('/testresponse', (req, res) => {
    res.send("hello");
})

MovieRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);