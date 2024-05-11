const express = require("express");

const { userController } = require("../../controllers");

const userRouter = express.Router();

userRouter.get("/ping", userController.pingUserController);

module.exports = userRouter;
