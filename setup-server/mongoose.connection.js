"use strict";

const mongoose = require("mongoose");

/**
 * Connecting to DB
 */
(async () => {
  try {
    const mongoUrl = `mongodb://localhost:27017/blog`;
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("DB connection success");
  } catch (error) {
    console.log(`Catch error while connecting to mongoose ${error}`);
    process.exit(-1);
  }
})();
