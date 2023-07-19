const router = require("express").Router();
const sequelize = require("../config/connection");
const { comment, post, user } = require("../Model");

// Home view Route
router.get("/", async (req, res) => {
    try {

        // Fetch all posts; associated users and comments
        const postData = await post.findAll({

            // Sorts Post ID in descending order (newest to oldest)
            order: sequelize.literal("id DESC"),
            include: [

                // Includes user model; excludes password
                {
                    model: user,
                    attributes: { exclude: "password" },
                },

                // Include comment model, selected attributes; nested user model excluding certain attributes */
                {
                    model: comment,
                    attributes: ["comment", "date_created"],
                    include: {
                        model: user,
                        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                    },
                },
            ],
        });

        if (!postData.length) {
            return res.render("404", {
                layout: "404",
                message: "No posts found."
            });
        }



        // Map Posts into plain objects for rendering
        const posts = postData.map((post) => post.get({ plain: true }));


        // Render the "home" view with the fetched posts,plus session info 
        res.render("home", {
            active: { home: true },
            posts,
            loggedIn: req.session.loggedIn,
            userName: req.session.userName,
            userId: req.session.userId,
        });
    } catch (err) {


        // Handle server errors with 500 status code,send a JSON response 
        res.status(500).json(err);
    }
});

module.exports = router;