const mongoose = require("mongoose");
const Joi = require("joi");

const distributionSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 5,
    max: 50,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["actor", "tehnical"],
  },
});

const Distribution = mongoose.model("Distribution", distributionSchema);

function validateDistribution(distributor) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    profileImage: Joi.string().required(),
    role: Joi.string().required(),
  });
  return schema.validate(distributor);
}

exports.Distribution = Distribution;
exports.distributionSchema = distributionSchema;
exports.validate = validateDistribution;
