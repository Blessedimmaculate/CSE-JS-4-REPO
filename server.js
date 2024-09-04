const express = require("express");
const mongoose = require("mongoose");
const { mongoUri } = require("./config");

const app = express();

// database configuration
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });

// middleware to convert the body object to json
app.use(express.json());

// routes
const studentRoutes = require("./routes/studentRoutes");

app.get("/", (req, res) => {
  res.send("server is running successfully...");
});

app.use("/students", studentRoutes);

app.get("*", (req, res) => {
  res.send("error, page not found");
});

app.listen(4400, () => {
  console.log("app running on port 4400");
});

// WHAT NEXT?
