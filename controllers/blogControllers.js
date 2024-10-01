
// const Article = require('../models/article');

// // Create a new article
// exports.createArticle = async (req, res) => {
//   try {
//     console.log(req.body);
//     // return res.send(req.body);
//     const { title, content, author, tags } = req.body;
//     const mainImage = req.file ? `/uploads/${req.file.filename}` : '';

//     const newArticle = new Article({
//       title,
//       content: JSON.parse(content),
//       mainImage,
//       author,
//       tags: tags ? tags.split(',') : [],
//     });

//     await newArticle.save();
//     res.status(201).json({ message: 'Article created successfully', article: newArticle });
//   } catch (error) {
//     console.error('Error creating article:', error);
//     res.status(500).json({ message: 'Failed to create article', error });
//   }
// };

// // Read all articles
// exports.getAllArticles = async (req, res) => {
//   try {
//     const articles = await Article.find();
//     res.status(200).json({ articles });
//   } catch (error) {
//     console.error('Error fetching articles:', error);
//     res.status(500).json({ message: 'Failed to fetch articles', error });
//   }
// };

// // Read a single article by ID
// exports.getArticleById = async (req, res) => {
//   try {
//     const article = await Article.findById(req.params.id);
//     if (!article) {
//       return res.status(404).json({ message: 'Article not found' });
//     }
//     res.status(200).json({ article });
//   } catch (error) {
//     console.error('Error fetching article:', error);
//     res.status(500).json({ message: 'Failed to fetch article', error });
//   }
// };

// // Update an article
// exports.updateArticle = async (req, res) => {
//   try {
//     const { title, content, author, tags } = req.body;
//     const mainImage = req.file ? `/uploads/${req.file.filename}` : req.body.mainImage; // Update image only if new one is uploaded

//     const updatedArticle = await Article.findByIdAndUpdate(
//       req.params.id,
//       { title, content: JSON.parse(content), mainImage, author, tags: tags ? tags.split(',') : [] },
//       { new: true, runValidators: true }
//     );

//     if (!updatedArticle) {
//       return res.status(404).json({ message: 'Article not found' });
//     }

//     res.status(200).json({ message: 'Article updated successfully', article: updatedArticle });
//   } catch (error) {
//     console.error('Error updating article:', error);
//     res.status(500).json({ message: 'Failed to update article', error });
//   }
// };

// // Delete an article
// exports.deleteArticle = async (req, res) => {
//   try {
//     const deletedArticle = await Article.findByIdAndDelete(req.params.id);
//     if (!deletedArticle) {
//       return res.status(404).json({ message: 'Article not found' });
//     }
//     res.status(200).json({ message: 'Article deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting article:', error);
//     res.status(500).json({ message: 'Failed to delete article', error });
//   }
// };




// // const Blog = require('../models/article');

// // // Create a new blog
// // exports.createBlog = async (req, res) => {
// //     try {
// //         const { title, author, tags, content } = req.body;
// //         const newBlog = new Blog({ title, author, tags, content });
// //         const savedBlog = await newBlog.save();
// //         res.status(201).json(savedBlog);
// //     } catch (err) {
// //         res.status(400).json({ error: err.message });
// //     }
// // };

// // // Get all blogs
// // exports.getAllBlogs = async (req, res) => {
// //     try {
// //         const blogs = await Blog.find();
// //         res.status(200).json(blogs);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };

// // // Get a single blog by ID
// // exports.getBlogById = async (req, res) => {
// //     try {
// //         const blog = await Blog.findById(req.params.id);
// //         if (!blog) return res.status(404).json({ error: 'Blog not found' });
// //         res.status(200).json(blog);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };

// // // Update a blog by ID
// // exports.updateBlog = async (req, res) => {
// //     try {
// //         const { title, author, tags, content } = req.body;
// //         const updatedBlog = await Blog.findByIdAndUpdate(
// //             req.params.id,
// //             { title, author, tags, content },
// //             { new: true }
// //         );
// //         if (!updatedBlog) return res.status(404).json({ error: 'Blog not found' });
// //         res.status(200).json(updatedBlog);
// //     } catch (err) {
// //         res.status(400).json({ error: err.message });
// //     }
// // };

// // // Delete a blog by ID
// // exports.deleteBlog = async (req, res) => {
// //     try {
// //         const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
// //         if (!deletedBlog) return res.status(404).json({ error: 'Blog not found' });
// //         res.status(200).json({ message: 'Blog deleted successfully' });
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // };







const Article = require('../models/article');

// Create a new article
exports.createArticle = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const mainImage = req.file ? `/uploads/${req.file.filename}` : '';

    const newArticle = new Article({
      title,
      content: JSON.parse(content),
      mainImage,
      author,
      tags: tags ? tags.split(',') : [],
    });

    await newArticle.save();
    res.status(201).json({ message: 'Article created successfully', article: newArticle });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Failed to create article', error });
  }
};

// Read all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Failed to fetch articles', error });
  }
};

// Read a single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ article });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: 'Failed to fetch article', error });
  }
};

// Update an article
exports.updateArticle = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const mainImage = req.file ? `/uploads/${req.file.filename}` : req.body.mainImage; // Update image only if new one is uploaded

    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { title, content: JSON.parse(content), mainImage, author, tags: tags ? tags.split(',') : [] },
      { new: true, runValidators: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.status(200).json({ message: 'Article updated successfully', article: updatedArticle });
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Failed to update article', error });
  }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error('Error deleting article:', error);
    res.status(500).json({ message: 'Failed to delete article', error });
  }
};
