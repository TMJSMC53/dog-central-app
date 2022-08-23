const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5500;
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
require("dotenv").config({ path: "./config/.env" });
const { adminAuth, userAuth } = require("./middleware/auth.js");

app.use(cors());

connectDB();

// SET MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "/public")));

app.get("/pet/register", (request, response) => {
  response.sendFile(__dirname + "index.html");
});

// Routes
app.use("/api/auth", require("./Auth/Route"));

app.get("/", (req, res) => res.render("homepage"));
app.get("/register", (req, res) => res.render("register"));
app.get("/login", (req, res) => res.render("login"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" });
  res.redirect("/");
});
app.get("/admin", adminAuth, (req, res) => res.render("admin"));
app.get("/basic", userAuth, (req, res) => res.render("user"));

// CRUD METHODS
app.post("/add-pet", (request, response) => {
  console.log("Post Heard");

  db.collection("pets")
    .insertOne(request.body)
    .then((result) => {
      console.log(result);
    });

  response.send("Data received:\n" + JSON.stringify(request.body));
});

app.get("/view-feedbacks", function (req, res) {
  dbConnectionStr.then((db) => {
    db.collection("pets")
      .find({})
      .toArray()
      .then(function (feedbacks) {
        res.status(200).json(feedbacks);
      });
  });
});

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
