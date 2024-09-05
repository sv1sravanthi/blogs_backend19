// generateObjectId.js
const mongoose = require('mongoose');

// Generate a new ObjectId
const newId = new mongoose.Types.ObjectId();

// Print the generated ObjectId to the console
console.log('Generated ObjectId:', newId.toString());
