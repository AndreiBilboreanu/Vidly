const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("../models/genre");
const { distributionSchema } = require("../models/distribution");

const Movie = mongoose.model(
  "Movies",
  new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      minlength: 4,
      maxlength: 255,
      required: true,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    numberInStock: {
      type: Number,
      min: 0,
      max: 255,
      default: 0,
    },
    dailyRentalRate: {
      type: Number,
      min: 0,
      max: 255,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    description: {
      type: String,
      min: 100,
      max: 5000,
      required: true,
    },
    distribution: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Distribution",
      },
    ],
  })
);

function validateMovie(movie) {
  const schema = Joi.object({
    title: Joi.string().min(4).max(255).required(),
    genreId: Joi.objectId().required(),
    numberInStock: Joi.number().min(0).max(255),
    dailyRentalRate: Joi.number().min(0).max(255),
    image: Joi.required(),
    rate: Joi.number().min(1).max(10).required(),
    description: Joi.string().min(100).max(5000).required(),
    distribution: Joi.array().items(Joi.objectId()),
  });
  return schema.validate(movie);
}

exports.Movie = Movie;
exports.validate = validateMovie;
