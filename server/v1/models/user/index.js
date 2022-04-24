"use strict";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },
    phone: {
      type: Number,
    },
    userType: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

module.exports = mongoose.model("user", userSchema);
