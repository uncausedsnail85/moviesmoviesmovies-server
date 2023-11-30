import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    tmdbId: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    userLikes: { type: Array },
    casts: { type: Array },
    discussions: { type: Array },
},
    { collection: "movies" });

export default movieSchema