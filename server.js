require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5500;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const addPetRoutes = require("./routes/add_pet");
const noteRoutes = require("./routes/note");

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

//Use forms for put / delete
app.use(methodOverride("_method"));

// Routes
app.use("/auth", authRoutes);
app.use("/pet", addPetRoutes);
app.use("/note", noteRoutes);

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  // server.close(() => process.exit(1));
});
