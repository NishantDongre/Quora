const express = require("express");
const userRouter = require("./user.routes");
const questionRouter = require("./question.routes");
const topicRouter = require("./topic.routes");
const answerRouter = require("./answer.routes");
const v1Routes = express.Router();

v1Routes.use("/users", userRouter);
v1Routes.use("/questions", questionRouter);
v1Routes.use("/topic", topicRouter);
v1Routes.use("/answers", answerRouter);

module.exports = v1Routes;
