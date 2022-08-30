const Mongoose = require("mongoose");
const PetSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner_pet_id: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const Pet = Mongoose.model("pet", PetSchema, "pets");

module.exports = Pet;
