"use strict";

const router = require("express").Router();

router.get("/", (req, res) => res.json({ message: "welcome to blog APIs" }));
router.use("/user", require("../controller/user"));
router.use("/blog", require("../controller/blog"));

module.exports = router;
