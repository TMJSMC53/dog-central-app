const express = require("express");
const router = express.Router();
const {
  register,
  login,
  update,
  deleteUser,
  getUsers,
} = require("../controllers/auth");
const { adminAuth, userAuth } = require("../middleware/auth.js");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").put(adminAuth, update);
router.route("/deleteUser").delete(adminAuth, deleteUser);
router.route("/getUsers").get(getUsers);

router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));
router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});

router.get("/admin", adminAuth, (req, res) => res.render("admin"));
router.get("/basic", userAuth, (req, res) => res.render("user"));

module.exports = router;
