const mongoose = require("mongoose");

//connecting datbase
const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/intuji").then(() => {
    console.log("Database connected!");
  });
};

//Exporting the function

module.exports = connectDatabase;
