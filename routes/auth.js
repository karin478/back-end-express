const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ message: "Test POST route is working!", data: req.body });
});

module.exports = router;
