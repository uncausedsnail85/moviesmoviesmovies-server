function UserRoutes(app) {

    const testUser = {
        "username": "bryan",
        "password": "123",
        "email": "b@test.com",
        "role": "ADMIN",
        "discussion_posts": [],
        "movie_lists": [],
    }


    // ### User Session ###
    const signin = async (req, res) => {
        const { username, password } = req.body;
        // const currentUser = await dao.findUserByCredentials(username, password);
        const currentUser = testUser
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
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

}

export default UserRoutes;