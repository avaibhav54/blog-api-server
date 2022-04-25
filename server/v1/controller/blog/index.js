"use strict";

const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.viewBlogs);
router.get("/:category", controller.viewBlogsByCategory);
router.post("/", controller.addBlog);
router.get("/admin/:id", controller.viewMyBlog);
module.exports = router;
