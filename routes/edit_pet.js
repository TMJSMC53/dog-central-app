//This route will handle editing and deleting pets, as well as rendering the edit_pet page itself

const express = require("express");
const router = express.Router();
const editPetController = require("../controllers/edit_pet");

// add specific routes for specific tasks

router.get("/:id", editPetController.editPet);
router.get("/remove/:id", editPetController.deletePet);
router.post("/:id", editPetController.updatePet);
router.put("/pet/editPet", editPetController.editPet);

module.exports = router;
