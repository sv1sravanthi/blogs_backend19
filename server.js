


// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const path = require('path');
// const blogRoutes = require('./routes/articles');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware to parse JSON and serve static files
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Connect to MongoDB
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.mongo_uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Database connected successfully');
//   } catch (err) {
//     console.error('Database connection failed:', err.message);
//     process.exit(1);
//   }
// };
// connectDB();

// // Use blog routes
// app.use('/api/articles', blogRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


// // const express = require('express');
// // const mongoose = require('mongoose');
// // const dotenv = require('dotenv');
// // const articlesRoute = require('./routes/articles'); // Ensure the path is correct

// // dotenv.config();

// // const app = express();

// // // Middleware
// // app.use(express.json()); // For parsing application/json

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => console.log('MongoDB connected'))
// //     .catch(err => console.log(err));

// // // Routes
// // app.use('/api/blogs', articlesRoute);

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articlesRoute = require('./routes/articles'); // Ensure the path is correct

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/blogs', articlesRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
