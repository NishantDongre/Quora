const express = require("express");

const { answerController } = require("../../controllers");

const answerRouter = express.Router();

answerRouter.get("/ping", answerController.pingAnswerController);
answerRouter.put("/:answerId", answerController.updateAnswer);
answerRouter.post("/:answerId/comments", answerController.addCommentOnAnswer);

module.exports = answerRouter;
