const express = require("express");
const { followController } = require("../../controllers");

const followRouter = express.Router();

followRouter.get("/ping", followController.pingFollowController);
followRouter.post("/users/:userId/:targetUserId", followController.addFollower);

module.exports = followRouter;
