const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
  medium: { type: String, default: 'Website' },
  userName: String,
  rating: Number,
  review: String
},

  {
    collection: 'reviews'
  }
)


const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;