const Mongoose = require("mongoose");
const NoteSchema = new Mongoose.Schema({
  pet_id: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  notes: {
    type: String,
    required: true,
  },

  due: {
    type: Date,
    required: true,
  },
});

const Note = Mongoose.model("note", NoteSchema, "notes");

module.exports = Note;
