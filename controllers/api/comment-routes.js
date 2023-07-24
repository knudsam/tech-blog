const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Define a route to handle creating a new comment
router.post("/", withAuth, (req, res) => {
  // Create a new comment using the Comment model and the data from the request body
  Comment.create({ ...req.body, userId: req.session.userId })
    .then(newComment => {
      // If the comment is created successfully, send the new comment as a JSON response
      res.json(newComment);
    })
    .catch(err => {
      // If there is an error, send a 500 status code and the error as a JSON response
      res.status(500).json(err);
    });
});

module.exports = router;