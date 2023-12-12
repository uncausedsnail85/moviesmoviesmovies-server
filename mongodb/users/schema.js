import mongoose from "mongoose";

const schema = new mongoose.Schema ({
    firstName: String,
    lastName: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER'},

},

// storing in a collection in our database called users (users.json)
{collection: "users"}

);

export default schema;