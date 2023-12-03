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
        // const currentUser = await dao.findUserByCredentials(username, password);
        // if (currentUser == null) {
        //     // handle here or at app???
        // }

        // ####### temp test case ########
        const currentUser = username === testUser.username && password === testUser.password ? testUser : null
        // const currentUser = testUser
        // console.log(JSON.stringify(currentUser));
        // ##############################

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