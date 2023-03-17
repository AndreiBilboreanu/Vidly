const mongoose = require("mongoose");
const Joi = require("joi");

const WatchList = mongoose.model(
  "Watchlist",
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    movieList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
      },
      {
        type: String,
        required: true,
        enum: ["watched", "unwatched"],
      }
    ],
  })
);

function validateWatchlist(watchlist) {
  const schema = Joi.object({
    userId: Joi.objectId().required(),
    movieList: Joi.array().items(Joi.objectId()),
  });
  return schema.validate(watchlist)
}
exports.WatchList = WatchList;
exports.validate = validateWatchlist;