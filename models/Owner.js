const Mongoose = require("mongoose");
const OwnerSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
});

const Owner = Mongoose.model("owner", OwnerSchema, "owners");

module.exports = Owner;
