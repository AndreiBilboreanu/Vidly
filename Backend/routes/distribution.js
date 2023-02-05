const { Distribution, validate } = require("../models/distribution");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const router = express.Router();

//Get all actors
router.get("/", async (req, res) => {
  const distribution = await Distribution.find();
  res.send(distribution);
});

//Create a distribution
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log("nasrfasfas");
  const distribution = new Distribution({
    name: req.body.name,
    profileImage: req.body.profileImage,
    role: req.body.role,
  });

  try {
    await distribution.save();
    res.send(distribution);
  } catch (ex) {
    for (let field in ex.errors) console.log(ex.errors[field].message);
  }
});

//Get an array of distribution by id
router.post("/distributions", async (req, res) => {
  const distribution = await Distribution.find({ _id: { $in: req.body._id } });
  if (!distribution)
    return res
      .status(404)
      .send("The distributor with the given ID was not found.");

  res.send(distribution);
});

//Get a distributor by id
router.get("/:id", async (req, res) => {
  const distribution = await Distribution.findById(req.params.id);
  if (!distribution)
    return res
      .status(404)
      .send("The distributor with the given ID was not found.");

  res.send(distribution);
});

module.exports = router;