const mongoose = require("mongoose"); ////importing mongoose and create Schema and model here
const Schema = mongoose.Schema;
//Schema
const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  createAt: {
    type: Date,
    default: new Date()
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", //model name
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
//syntax- const modelName = mongoose.model('modelName','schema')
const Note = mongoose.model("Note", noteSchema); //creating a model

module.exports = Note;
