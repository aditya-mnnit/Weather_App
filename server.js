const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require('mongoose');

// const ruleRoutes = require("./routes/ruleRoutes");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for serving the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
