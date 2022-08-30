// Relative route: /auth

const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const { ownerAuth } = require("../middleware/auth.js");
const Pet = require("../models/Pet");
const addPet = require("../controllers/add_pet");
const editPet = require("../controllers/edit_pet");
// const multer = require("multer");
// const os = require("os");
// const upload = multer({ dest: os.tmpdir() });

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
  res.render("dashboard", {
    ownerName: req.owner,
    petInfo: pets,
  });
});

// Pet routes
router.post("/pet/createPet", ownerAuth, addPet.createPet);
router.patch("/pet/editPet", editPet.editPet);

module.exports = router;
