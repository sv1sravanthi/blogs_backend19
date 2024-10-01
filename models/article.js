



// const mongoose = require('mongoose');

// const articleSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//     maxlength: 200,
//   },
//   content: [
//     {
//       type: {
//         type: String,
//         required: true,
//         enum: ['text', 'image', 'list', 'bullet'], // Handles different content types
//       },
//       value: {
//         type: mongoose.Schema.Types.Mixed, // Can be String for text, URL for images, etc.
//         required: true,
//       },
//       description: {
//         type: String,
//         trim: true,
//         default: '', // Optional description for images or other content types
//       }
//     },
//   ],
//   description: {
//     type: String,
//     // required: true,
//     trim: true
//   },
//   sections: [
//     {
//       heading: {
//         type: String,
//         trim: true,
//         default: ''
//       },
//       description: {
//         type: String,
//         trim: true,
//         default: ''
//       }
//     }
//   ],
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   tags: {
//     type: [String],
//     default: [],
//   },
//   likes: {
//     type: Number,
//     default: 0,
//   },
//   views: {
//     type: Number,
//     default: 0,
//   },
//   comments: [
//     {
//       user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//       comment: { type: String, required: true },
//       createdAt: { type: Date, default: Date.now },
//     },
//   ],
// });

// module.exports = mongoose.model('Article', articleSchema);



const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  content: [
    {
      type: {
        type: String,
        required: true,
        enum: ['text', 'image', 'list', 'bullet'],
      },
      value: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
    },
  ],
  mainImage: {
    type: String,
    required: true,
    trim: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Article', articleSchema);
