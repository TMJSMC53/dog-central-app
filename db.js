const Mongoose = require("mongoose");

const RemoteDB =
  "mongodb+srv://JackTree_Coding:KL0eOVTMcWKI1Olu@cluster0.ydbf8.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  Mongoose.connect(RemoteDB).then((client) => {
    console.log("MongoDB Connected");
  });
};
module.exports = connectDB;
