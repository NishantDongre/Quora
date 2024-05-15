const { StatusCodes } = require("http-status-codes");

const { LikeService } = require("../services");
const { LikeRepository } = require("../repositories");

const likeService = new LikeService(new LikeRepository());

function pingLikeController(req, res, next) {
    res.status(StatusCodes.OK).json({
        message: "Like Route alive",
    });
}

async function addLike(req, res, next) {
    try {
        const { type: entity, id: entityId } = req.params;
        const { userId } = req.body;
        console.log(entity, entityId, userId);
        if (!entity || !entityId || !userId) {
            throw new CustomRequest(
                "Missing any of the required Parameters: type(As Params), id(As Params), userId(In req.body) "
            );
        }
        const like = await likeService.addLike(entity, entityId, userId);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Liked",
            error: {},
            data: like,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingLikeController,
    addLike,
};
