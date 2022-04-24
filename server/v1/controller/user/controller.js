"use strict";

const User = require("../../models/user");

exports.register = async (req, res) => {
  try {
    const user = req.body;
    const re_user = await User.create(user);

    console.log(req.body);
    return res.json({
      message: "success",
      result: re_user,
    });
  } catch (error) {
    console.error(`Catch error inside register(): ${error.message || error}`);
  }
};

exports.login = async (req, res) => {
  try {
    const user = req.body;
    if (!user.email) {
      throw {
        statusCode: 400,
        message: "Email Required",
      };
    }
    if (!user.password) {
      throw {
        statusCode: 400,
        message: "Password Required",
      };
    }

    const re_user = await User.find({
      email: user.email,
      password: user.password,
    })
      .lean()
      .exec();
    console.log(req.body);
    console.log(re_user);

    if (!re_user) {
      throw {
        statusCode: 401,
        message: "Invalid Login",
      };
    }
    return res.json({
      message: "success",
      result: re_user,
    });
  } catch (error) {
    console.error(`Catch error inside login(): ${error.message || error}`);
  }
};
