const express = require('express');
const router = express.Router();
const Review = require('../Models/Reviews');


// --------------- Review Section ---------------

router.get('/', async (req, res) => {
  const medium = req.query.medium;
  const pageNumber = req.query.pageNumber;
  const pageSize = req.query.pageSize;

  let query = {};

  if (medium) {
    query = { medium }
  }
  const reviews = await Review
    .find(query)
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize);

  const count = await Review
    .find(query)
    .count();

  res.send({ count, reviews });

})

router.post('/', async (req, res) => {
  const reviewBody = req.body;
  const newReview = new Review(reviewBody);
  const result = await newReview.save();
  res.send(result);
})


module.exports = router;