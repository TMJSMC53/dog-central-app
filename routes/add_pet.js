const express = require("express");
const router = express.Router();
const addPetController = require("../controllers/add_pet");

// add specific routes for specific pet tasks

router.get("/pet", addPetController.petIndex);
router.post("/pet", addPetController.createPet);

module.exports = router;
