

const mongoose =  require("mongoose");
const express = require('express');
const multer = require('multer');
const dotenv= require("dotenv");
dotenv.config();
const Article = require('./models/article'); // Ensure the correct path to the Article model
const port= process.env.PORT;
const app = express();
const path = require('path');
// Multer configuration for file uploads
app.use(express.static('public'))
const connectDB= async () => {
  try{
      const connect=await mongoose.connect(process.env.mongo_uri)
      console.log("db connected")
  }
  catch(err){
      console.log("db not connected",err.message)
  }
};
connectDB()
app.listen(port,()=>{
  console.log(`server running on ${port}` )
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, path.join(__dirname, './public/uploads/'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const uploads = multer({ storage: storage })

// Correctly defining the /articles POST route
app.post('/articles', uploads.single('mainImage'), async (req, res) => {
  try {
    const { title, author, content } = req.body;
    console.log(req.body);
    const mainImagePath = req.file ? `/uploads/${req.file.filename}` : '';

    const newArticle = await Article.create({
      title,
      author,
      content: JSON.parse(content), // Convert content from JSON string to object
      mainImage: mainImagePath,
    });

    
    res.status(200).json({ message: 'Article created successfully', article: newArticle });
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Error creating article', error });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});