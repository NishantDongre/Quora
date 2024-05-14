const express = require("express");

const { questionController } = require("../../controllers");

const questionRouter = express.Router();

questionRouter.get("/ping", questionController.pingQuestionController);
questionRouter.post("/", questionController.addQuestion);
questionRouter.get("/search", questionController.getQuestion);
questionRouter.post("/:questionId/answers", questionController.postAnswer);

module.exports = questionRouter;
