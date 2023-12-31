const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Define the routes and their corresponding route files
router.use('/user', userRoutes);   
router.use('/post', postRoutes);     
router.use('/comment', commentRoutes); 

module.exports = router;