const Mongoose = require("mongoose");
const VaccineSchema = new Mongoose.Schema({
  pet_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  last_applied_date: {
    type: Date,
    required: false,
  },

  frequency: {
    type: Array,
    required: true,
  },

  type: {
    type: String,
    required: false,
  },
});

const Vaccine = Mongoose.model("vaccine", VaccineSchema, "vaccines");

module.exports = Vaccine;
