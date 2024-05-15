const express = require("express");
const { likeController } = require("../../controllers");

const likeRouter = express.Router();

likeRouter.get("/ping", likeController.pingLikeController);
likeRouter.post("/:type/:id", likeController.addLike);

module.exports = likeRouter;
