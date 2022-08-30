require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5500;
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const addPetRoutes = require("./routes/add_pet");
const editPetRoutes = require("./routes/edit_pet");

app.set("view engine", "ejs");

app.use(cors());

connectDB();

// SET MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "/public")));

app.get("/pet", (request, response) => {
  response.sendFile(__dirname + "pet.ejs");
});

app.get("/", (req, res) => res.render("homepage"));

// Routes
app.use("/auth", authRoutes);
app.use("/dashboard", addPetRoutes);
app.use("/dashboard", editPetRoutes);

// app.get("/view-feedbacks", function (req, res) {
//   dbConnectionStr.then((db) => {
//     db.collection("pets")
//       .find({})
//       .toArray()
//       .then(function (feedbacks) {
//         res.status(200).json(feedbacks);
//       });
//   });
// });

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  // server.close(() => process.exit(1));
});
