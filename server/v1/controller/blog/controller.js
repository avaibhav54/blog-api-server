"use strict";

const Blog = require("../../models/blogs");
const User = require("../../models/user");
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

exports.addBlog = async (req, res) => {
  try {
    const blog = req.body;
    if (!blog) {
      throw {
        statusCode: 400,
        message: `Blog required`,
      };
    }
    if (blog?.user?.userType != "Admin") {
      throw {
        statusCode: 401,
        message: `You are not a admin to create a blog`,
      };
    }
    const re_blog = await Blog.create(blog);

    console.log(req.body);
    return res.json({
      message: "success",
      result: re_blog,
    });
  } catch (error) {
    console.error(`Catch error inside addBlog(): ${error.message || error}`);
    res.json(error);
  }
};

exports.viewMyBlog = async (req, res) => {
  try {
    console.log("checking");
    const id = req.params.id;
    if (!id) {
      throw {
        statusCode: 400,
        message: `id required`,
      };
    }
    const cuser = await User.find({
      _id: id,
    })
      .lean()
      .exec();

    const blogs = await Blog.find({
      user: cuser,
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
