const Note = require("../models/Note");
const Pet = require("../models/Pet");

module.exports = {
  addNote: async (req, res) => {
    try {
      await Note.create({
        pet_id: req.body.petId,
        event: req.body.event,
        date: req.body.date,
        notes: req.body.notes,
        due: req.body.due,
      });
      console.log("New note has been registered!");
      res.redirect("/auth/dashboard");
    } catch (err) {
      console.log("ERROR: Register note");
      console.log(err);
    }
  },

  deleteNote: async (req, res) => {
    try {
      let note = await Note.deleteOne({ _id: req.params.id });
      console.log(note);
      console.log("Note deleted!");
      res.redirect("/auth/dashboard");
    } catch (err) {
      res.redirect("/auth/dashboard");
    }
  },
};
