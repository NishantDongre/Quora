const express = require("express");
const userRouter = require("./user.routes");
const v1Routes = express.Router();

v1Routes.use("/users", userRouter);

module.exports = v1Routes;
