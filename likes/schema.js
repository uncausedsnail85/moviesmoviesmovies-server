import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "users"},
        username: { type: String, required: true},
        tmdbId: { type: Number, required: true},
    },
    { collection: "likes" }
);

export default schema;