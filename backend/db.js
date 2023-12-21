const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/gofoodmern";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    // Fetch data after successful connection
    const fetch_data = mongoose.connection.db.collection("foodData");

    // Check if the connection is open before trying to fetch data
    if (mongoose.connection.readyState === 1) {
      const data = await fetch_data.find({}).toArray();
      // console.log("Fetched data:", data);
    } else {
      console.error("MongoDB connection not open.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
