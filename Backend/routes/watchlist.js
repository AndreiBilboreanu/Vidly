const { WatchList, validate } = require("../models/watchlist");
const express = require("express");
const router = express.Router();

// get all watchlist list
router.get("/", async (req, res) => {
  const watchlist = await WatchList.find();
  res.send(watchlist);
});



module.exports = router;
