const { Review, validate } = require("../models/review");
const { Movie } = require("../models/movie");
const { User } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

//Get all reviews
router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});

//Create a review
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Verify if userId is exists
  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send("Invalid user!");

  //Verify if movieId is exists
  const movie = await Movie.findById(req.body.movieId);
  if (!movie) return res.status(400).send("Invalid movie!");

  //Creating a new review
  const review = new Review({
    userId: req.body.userId,
    movieId: req.body.movieId,
    review: req.body.review,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
  });

  //Database push
  try {
    await review.save();
    res.send(review);
  } catch (ex) {
    for (let field in ex.errors)
      return res.status(400).send(ex.errors[field].message);
  }
});

module.exports = router;
