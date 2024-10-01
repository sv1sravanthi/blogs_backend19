


// // const express = require('express');
// // const multer = require('multer');
// // const router = express.Router();
// // const blogControllers = require('../controllers/blogControllers');

// // // Multer configuration for file uploads
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, './public/uploads/'); // Ensure the 'uploads' folder exists or create it
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + '-' + file.originalname);
// //   },
// // });

// // const upload = multer({ storage: storage });

// // // Create a new article
// // router.post('/', upload.single('mainImage'), blogControllers.createArticle);

// // // Get all articles
// // router.get('/', blogControllers.getAllArticles);

// // // Get a single article by ID
// // router.get('/:id', blogControllers.getArticleById);

// // // Update an article by ID
// // router.put('/:id', upload.single('mainImage'), blogControllers.updateArticle);

// // // Delete an article by ID
// // router.delete('/:id', blogControllers.deleteArticle);

// // module.exports = router;



// // const express = require('express');
// // const multer = require('multer');
// // const router = express.Router();
// // const fs = require('fs');
// // const blogControllers = require('../controllers/blogControllers');

// // // Multer configuration for handling file uploads
// // const upload = multer();

// // // Create a new article
// // router.post('/', upload.single('mainImage'), blogControllers.createArticle);

// // // Get all articles
// // router.get('/', blogControllers.getAllArticles);

// // // Get a single article by ID
// // router.get('/:id', blogControllers.getArticleById);

// // // Update an article by ID
// // router.put('/:id', upload.single('mainImage'), blogControllers.updateArticle);

// // // Delete an article by ID
// // router.delete('/:id', blogControllers.deleteArticle);

// // module.exports = router;



// const express = require('express');
// const router = express.Router();
// const blogController = require('../controllers/blogControllers'); // Ensure the path is correct

// // Create a new blog
// router.post('/', blogController.createBlog);

// // Get all blogs
// router.get('/', blogController.getAllBlogs);

// // Get a single blog by ID
// router.get('/:id', blogController.getBlogById);

// // Update a blog by ID
// router.put('/:id', blogController.updateBlog);

// // Delete a blog by ID
// router.delete('/:id', blogController.deleteBlog);

// module.exports = router;




const express = require('express');
const multer = require('multer');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/'); // Ensure the 'uploads' folder exists or create it
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Create a new article
router.post('/', upload.single('mainImage'), blogControllers.createArticle);

// Get all articles
router.get('/', blogControllers.getAllArticles);

// Get a single article by ID
router.get('/:id', blogControllers.getArticleById);

// Update an article by ID
router.put('/:id', upload.single('mainImage'), blogControllers.updateArticle);

// Delete an article by ID
router.delete('/:id', blogControllers.deleteArticle);

module.exports = router;
