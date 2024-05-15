const express = require("express");

const { commentController } = require("../../controllers");

const commentRouter = express.Router();

commentRouter.get("/ping", commentController.pingCommentController);
commentRouter.post(
    "/:commentId/comments",
    commentController.addCommentOnComment
);

module.exports = commentRouter;
