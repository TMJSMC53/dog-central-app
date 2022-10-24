// Relative route: /auth
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const { ownerAuth } = require("../middleware/auth.js");
const Pet = require("../models/Pet");
const Note = require("../models/Note");

router.post("/register", register);
router.post("/login", login);

router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

// ownerAuth
//  added owner to request

router.get("/dashboard", ownerAuth, async (req, res) => {
  let pets = await Pet.find({ owner_pet_id: req.owner.id });
  let notes = [];
  for (let pet of pets) {
    let petNotes = await Note.find({ pet_id: pet._id }).sort({ due: 1 }).lean();
    for (let note of petNotes) {
      note.pet = pet;
    }
    notes.push(...petNotes);
  }
  res.render("dashboard", {
    ownerName: req.owner,
    petInfo: pets,
    petNotes: notes,
  });
});

module.exports = router;
