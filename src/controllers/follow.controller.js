const { StatusCodes } = require("http-status-codes");

const { FollowService } = require("../services");
const { FollowRepository } = require("../repositories");
const CustomRequest = require("../errors/customRequest.error");

const followService = new FollowService(new FollowRepository());

function pingFollowController(req, res, next) {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Follow Route alive",
    });
}

async function addFollower(req, res, next) {
    try {
        const { userId, targetUserId } = req.params;
        if (!targetUserId || !userId) {
            throw new CustomRequest(
                "Missing any of the required Parameters: userId(As Params), targetUserId(In req.body) "
            );
        }
        const follow = await followService.addFollower(userId, targetUserId);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Liked",
            error: {},
            data: follow,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingFollowController,
    addFollower,
};
