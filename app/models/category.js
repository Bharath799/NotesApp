const mongoose = require("mongoose"); //importing mongoose and create Schema and model here
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
