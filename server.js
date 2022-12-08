const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const learningItemRoutes = require("./routes/learningItem");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/learningItems", learningItemRoutes);

mongoose
  .connect("mongodb://localhost:27017/learningDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
