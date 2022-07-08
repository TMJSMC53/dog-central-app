const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5500;
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

app.use(cors());

// DECLARED DB VARIABLES
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "dogCentral";

// CONNECT TO MONGO
MongoClient.connect(dbConnectionStr).then((client) => {
  console.log(`Connected to ${dbName} Database`);
  db = client.db(dbName);
});

// SET MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

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

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running.`);
});
