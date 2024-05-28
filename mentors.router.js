const express = require("express");

const router = express.Router();

// GET /mentors
router.get("/", (request, response) => {
  response.json({
    message: "All mentors",
  });
});

module.exports = router;
