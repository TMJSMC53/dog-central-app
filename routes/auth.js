const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth");
const { ownerAuth } = require("../middleware/auth.js");

//router.route("/register").post(register);
router.post("/register", register);
router.route("/login").post(login);

router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

// ownerAuth
//  added owner to request

router.get("/dashboard", ownerAuth, (req, res) =>
  res.render("dashboard.ejs", { ownerName: req.owner })
);

module.exports = router;
