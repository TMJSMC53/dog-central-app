const Note = require("../models/Note");
const Pet = require("../models/Pet");

module.exports = {
  addNote: async (req, res) => {
    try {
      const pet = await Pet.findOne({ name: req.body.petName });

      await Note.create({
        pet_id: pet._id,
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
};
