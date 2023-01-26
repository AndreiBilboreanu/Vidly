const { Movie, validate } = require("../models/movie");
const mongoose = require("mongoose");
const express = require("express");
const { Genres } = require("../models/genre");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// Get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

// Get a movie by id
router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

//Creat a movie
router.post("/", [auth], async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Verify if the genre id exists
  const genre = await Genres.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genres.");

  const movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });
  console.log(movie);
  try {
    await movie.save();
    res.send(movie);
  } catch (ex) {
    for (let field in ex.errors) console.log(ex.errors[field].message);
  }
});

// Delete a movie
router.delete("/:id",[auth,admin], async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);

  if (!movie)
    return res.status(404).send("The movie with the given ID was not found.");

  res.send(movie);
});

// Update a movie by id
router.put("/:id", [auth],async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genres.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid genre.");

  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        genre: {
          _id: genre._id,
          name: genre.name,
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate,
      },
      { new: true }
    );
    if (!movie) return res.status(404).send("The movie doesn t exist!");
    res.send(movie);
  } catch (ex) {
    for (let field in ex.errors) console.log(ex.errors[field].message);
  }
});

module.exports = router;
