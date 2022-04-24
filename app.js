"use strict";
const bp = require("body-parser");

const express = require("express");
require("./setup-server/mongoose.connection");

const app = express();
const PORT = 2000;
app.use(express.json());

/**API routes */
app.use("/api/v1", require("./server/v1/routes"));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
