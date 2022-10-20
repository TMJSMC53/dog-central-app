const express = require("express");
const router = express.Router();
const { ownerAuth } = require("../middleware/auth.js");
const noteController = require("../controllers/note");

// Query DB -> Raw data -Hash maps, dicitonaries / JSON / Object/Class <- takes a lot of time (Legacy or High Performance systems)
// ORM -> Raw data -> Object/Class <- CRUD
// Idea -> Model -> Data Layer (DB Manager (MongoDB + Mongoose) , ORM) -> Controller -> Middleware -> View
// Routes for Vaccine model control
// Vaccine routes
// Register vaccine -> /vaccine/registerVaccine
router.post("/addNote", ownerAuth, noteController.addNote);

module.exports = router;
