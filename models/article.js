

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
//         enum: ['text', 'image', 'list', 'bullet'],
//       },
//       value: {
//         type: mongoose.Schema.Types.Mixed,
//         required: true,
//       },
//     },
//   ],
//   mainImage: {
//     type: String,
//     required: true,
//     trim: true, // URL of the main image
//   },
//   createdDate: {
//     type: Date,
//     default: Date.now,

//   },
//   author: {
//     type: String,
//     // ref: 'User',
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
