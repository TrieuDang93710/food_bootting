const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  recipe: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: String,
    require: true,
  },
});

let Menu = mongoose.model("Menu", menuSchema);

module.exports = { Menu };
