const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const Review = mongoose.model(
  "Reviews",
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
    review: {
      type: String,
      min: 100,
      max: 5000,
      required: true,
    },
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
  })
);

function validateReview(review) {
  const schema = Joi.object({
    userId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
    review: Joi.string().min(100).max(5000).required(),
    likes: Joi.number(),
    dislikes: Joi.number(),
  });
  return schema.validate(review);
}
exports.Review = Review;
exports.validate = validateReview;
