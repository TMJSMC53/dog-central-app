const express = require("express");
const router = express.Router();
const addPetController = require("../controllers/add_pet");

// add specific routes for specific pet tasks

router.post("/pet", addPetController.createPet);

module.exports = router;
