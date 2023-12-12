import schema from "./schema.js";
import mongoose from "mongoose";
// import bycrypt from bycrypt (library used for encypting passwords)

const model = mongoose.model("users", schema);




export default model;