const mongoose = require("mongoose");

const { Schema } = mongoose;

const menuSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a product name"],
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cuisine: {
    type: Array,
    required: true,
  },
  avgRating: {
    type: String,
    required: true,
  },
  costForTwo: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  promoted: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  menu: [menuSchema],
});


module.exports = mongoose.model("product", ProductSchema);
