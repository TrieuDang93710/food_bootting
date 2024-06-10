const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: 3,
  },
  recipe: String,
  image: String,
  category: String,
  price: Number,
});

let Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
