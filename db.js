const Mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

// DECLARED DB VARIABLES
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "dogCentral";

/*
const connectDB = async () => {
  // CONNECT TO MONGO

  // MongoClient.connect(dbConnectionStr).then((client) => {
  //   console.log(`Connected to ${dbName} Database`);
  //   db = client.db(dbName);
  // });
  const client = await MongoClient.connect(dbConnectionStr);
  console.log(`Connected to ${dbName} Database2`);
  db = client.db(dbName);
  return { db, dbConnectionStr, dbName };
};
*/

const RemoteDB =
  "mongodb+srv://JackTree_coding:7WZ8EkWlXMEo8jEg@cluster0.qyhpv.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  Mongoose.connect(RemoteDB).then((client) => {
    console.log("MongoDB Connected");
  });
};
module.exports = connectDB;
