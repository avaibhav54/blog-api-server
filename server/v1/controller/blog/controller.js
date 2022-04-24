"use strict";

const User = require("../../models/user");
const Blog = require("../../models/blogs");

exports.viewBlogs = async (req, res) => {
  try {
    console.log("checking");
    const blogs = await Blog.find({}).lean().exec();

    return res.json({
      message: "success",
      result: blogs,
    });
  } catch (error) {
    console.error(`Catch error inside login(): ${error.message || error}`);
  }
};

exports.viewBlogsByCategory = async (req, res) => {
  try {
    console.log("checking");
    const category = req.params.category;
    if (!category) {
      throw {
        statusCode: 400,
        message: `Category required`,
      };
    }
    const blogs = await Blog.find({
      category: category,
    })
      .lean()
      .exec();

    return res.json({
      message: "success",
      result: blogs,
    });
  } catch (error) {
    console.error(`Catch error inside login(): ${error.message || error}`);
  }
};
