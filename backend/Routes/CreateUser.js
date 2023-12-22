const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const { useReducer } = require("react");

// router.post("/createuser", async (req, res) => {
//   try {
//     await User.create({
//       name: req.body.name,
//       password: req.body.password,
//       email: req.body.email,
//       location: req.body.location,
//     });

//     res.json({
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//     });
//   }
// });

//create food product
router.post("/createproduct", async (req, res) => {
  try {
    await Product.create({
      name: req.body.name,
      cuisine: req.body.cuisine,
      avgRating: req.body.avgRating,
      costForTwo: req.body.costForTwo,
      deliveryTime: req.body.deliveryTime,
      img: req.body.img,
      menu: req.body.menu,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
});

router.get("/fetchproduct", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
    console.log(product);
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
    });
  }
});

// router.get("/createuser", async (req, res) => {
//   try {
//     const product = await User.find({});
//     res.status(200).json(product);
//     console.log(product);
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//     });
//   }
// });

module.exports = router;
