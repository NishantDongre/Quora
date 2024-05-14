const express = require("express");

const { answerController } = require("../../controllers");

const answerRouter = express.Router();

answerRouter.get("/ping", answerController.pingAnswerController);
answerRouter.put("/:answerId", answerController.updateAnswer);

module.exports = answerRouter;
