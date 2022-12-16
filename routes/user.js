const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/blogs/:blogid", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","blog-details.html"));
});

router.use("/blogs", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","blogs.html"));
});

router.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/users","index.html"));
});

module.exports = router;