const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const { ownerAuth } = require("../middleware/auth.js");

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

router.get("/dashboard", ownerAuth, (req, res) =>
  res.render("dashboard", { ownerName: req.owner })
);
router.get("/pet", ownerAuth, (req, res) =>
  res.render("pet", { ownerName: req.owner })
);

module.exports = router;
