import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        username: { type: String, required: true},
        tmdbId: { type: Number, required: true},
    },
    { collection: "likes" }
);

export default schema;