


// const express = require('express');
// const multer = require('multer');
// const article = require('../models/article');
// const router = express.Router();

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Ensure the 'uploads' folder exists or create it
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// // Multer upload configuration
// const upload = multer({ storage: storage });

// // Route to create a new article
// router.post('/articles', upload.single('mainImage'), async (req, res) => {
//   try {
//     const { title, content, author } = req.body;

//     // Create the new article
//     const article = new Article({
//       title,
//       content: JSON.parse(content), // Parse the content JSON string from form data
//       mainImage: req.file ? req.file.path : null,
//       author,
//     });

//     await article.save();
//     res.status(201).json({ message: 'Article created successfully', article });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

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
