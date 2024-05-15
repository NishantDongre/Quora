const { StatusCodes } = require("http-status-codes");

const { CommentService } = require("../services");
const { CommentRepository } = require("../repositories");
const CustomRequest = require("../errors/customRequest.error");

const commentService = new CommentService(new CommentRepository());

function pingCommentController(req, res) {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Comment controller alive",
    });
}

async function addCommentOnComment(req, res, next) {
    try {
        const { commentId } = req.params;
        const { text: commentText, userId } = req.body;
        if (!commentText || !userId || !commentId) {
            throw new CustomRequest(
                "Missing any of the required Parameters: commentId(As Params), text(In req.body), userId(In req.body) "
            );
        }
        const commentOnComment = await commentService.addCommentOnComment(
            commentId,
            userId,
            commentText
        );
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully added comment on comment",
            error: {},
            data: commentOnComment,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingCommentController,
    addCommentOnComment,
};
