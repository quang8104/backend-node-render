const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"));

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Backend CI/CD OK" });
});

app.listen(3000);
