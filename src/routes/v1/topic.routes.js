const express = require("express");

const { topicController } = require("../../controllers");

const topicRouter = express.Router();

topicRouter.get("/ping", topicController.pingTopicController);
topicRouter.post("/", topicController.addTopic);
topicRouter.get("/", topicController.getAllTopics);

module.exports = topicRouter;
