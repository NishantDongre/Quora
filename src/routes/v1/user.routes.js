const express = require("express");

const { UserController } = require("../../controllers");

const userRouter = express.Router();

userRouter.get("/ping", UserController.pingUserController);

module.exports = userRouter;
