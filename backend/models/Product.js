const mongoose = require("mongoose");

const { Schema } = mongoose;

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
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", ProductSchema);
