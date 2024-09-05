// controllers/articleController.js

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
