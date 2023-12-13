import { json } from "express";
import * as dao from "./dao.js";


function UserRoutes(app) {

    const testUser = {
        "username": "ada",
        "password": "123",
        "email": "b@test.com",
        "role": "ADMIN",
        "discussion_posts": [],
        "movie_lists": [],
    }

    // ### User Session ###
    const signin = async (req, res) => {
        const { username, password } = req.body;
        const user = await dao.findUserByCredentials(username, password); //SW
        // send user object back, even if not found sent back as null
        req.session['currentUser'] = user;
        res.json(user);
    };
    const signout = (req, res) => {
        req.session.destroy();
        res.json(200);
    };
    const account = async (req, res) => {
        res.json(req.session['currentUser']);
    };
    // app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/account", account);


    // CREATE NEW USER - SW
    // const { username, password, email, role } = req.body;

    // app.post("/api/users", createUser);

    const createUser = async (req, res) => {
        const { firstName, lastName, username, password, email, role } = req.params;
        const user = await createUserDao({
            firstName,
            lastName,
            username,
            password,
            email,
            role,
        });

        res.json(user);
    };

    // FIND ALL USERS - SW 
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };

    // FIND USER BY ID - SW  
    const findUserById = async (req, res) => {
        const id = req.params.id;
        const users = await dao.findUserById(id);
        res.json(users);
    };

    // FIND USER BY USERNAME - SW  
    const findUserByUsername = async (req, res) => {
        const username = req.params.username;
        const users = await dao.findUserByUsername(username);
        res.json(users);
    };

    // FIND USER BY USERNAME - SW  
    const findUserByCredentials = async (req, res) => {
        const { username, password } = req.params;
        const users = await dao.findUserByCredentials(username, password);
        console.log(`user: ${JSON.stringify(user)}`)
        res.json(users);
    };

    // FIND USER BY ROLE - SW - role for admin is working but not "USER"
    const findUsersByRole = async (req, res) => {
        const role = req.params.role;
        const users = await dao.findUsersByRole(role);
        res.json(users);
    };

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:id", findUserById);
    app.get("/api/users/username/:username", findUserByUsername);
    app.get("/api/users/credentials/:username/:password", findUserByCredentials); //not safe, use post
    app.get("/api/users/role/:role", findUsersByRole); // The "USER" IS NOT WORKING IN WEB
    app.get("/api/users/:firstName/:lastName/:username/:password/:email/:role", createUser);

}


export default UserRoutes;