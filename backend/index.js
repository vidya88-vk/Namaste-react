const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

// Use the cors middleware
app.use(cors());

//calling route
// app.use("/api", require("./Routes/CreateUser"));
app.use("/getall", require("./Routes/CreateUser"));

app.use("/createproduct", require("./Routes/CreateUser"));
app.use("/fetchproduct", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
