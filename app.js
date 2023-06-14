var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth"); // Import the auth route

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter); // Use the auth route

app.get("/test", (req, res) => {
  res.send({ message: "Test route is working!" });
});

app.post("/test", (req, res) => {
  res.send({ message: "Test POST route is working!", data: req.body });
});

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
