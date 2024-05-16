const express = require("express");
const userRouter = require("./user.routes");
const questionRouter = require("./question.routes");
const topicRouter = require("./topic.routes");
const answerRouter = require("./answer.routes");
const commentRouter = require("./comment.routes");
const likeRouter = require("./like.routes");
const followRouter = require("./follow.routes");

const v1Routes = express.Router();

v1Routes.use("/users", userRouter);
v1Routes.use("/questions", questionRouter);
v1Routes.use("/topic", topicRouter);
v1Routes.use("/answers", answerRouter);
v1Routes.use("/comments", commentRouter);
v1Routes.use("/likes", likeRouter);
v1Routes.use("/follows", followRouter);

module.exports = v1Routes;
