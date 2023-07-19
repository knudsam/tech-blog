const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Define the routes and their corresponding route files
router.use('/user', userRoutes);       // Routes for user-related endpoints
router.use('/post', postRoutes);       // Routes for post-related endpoints
router.use('/comment', commentRoutes); // Routes for comment-related endpoints

module.exports = router;