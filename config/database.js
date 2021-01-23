const mongoose = require("mongoose");

//maongodb connection configuration
const setupDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/oct-copy-notes-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }) //basically aync operation
    .then(() => {
      console.log("connect to db");
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = setupDB;
