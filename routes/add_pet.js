const express = require("express");
const router = express.Router();
const { ownerAuth } = require("../middleware/auth.js");
const upload = require("../middleware/multer");
const addPetController = require("../controllers/add_pet");

// add specific routes for specific pet tasks

// router.post("/pet", upload.single("file"), addPetController.createPet);

// Pet routes
router.post(
  "/createPet",
  upload.single("file"),
  ownerAuth,
  addPetController.createPet
);

router.delete("/deletePet/:id", addPetController.deletePet);
router.put("/updatePet/:id", upload.single("file"), addPetController.updatePet);

module.exports = router;
