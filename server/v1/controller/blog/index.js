"use strict";

const router = require("express").Router();
const controller = require("./controller");

router.get("/view", controller.viewBlogs);
router.get("/view/:category", controller.viewBlogsByCategory);

module.exports = router;
