const { StatusCodes } = require("http-status-codes");

const { AnswerService } = require("../services");
const { AnswerRepository } = require("../repositories");
const CustomRequest = require("../errors/customRequest.error");

const answerService = new AnswerService(new AnswerRepository());

function pingAnswerController(req, res) {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Answer controller alive",
    });
}

async function updateAnswer(req, res, next) {
    try {
        const answerId = req.params?.answerId;
        const updatedAnswer = await answerService.updateAnswer(
            answerId,
            req.body
        );
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Updated the Answer",
            error: {},
            data: updatedAnswer,
        });
    } catch (error) {
        next(error);
    }
}

async function addCommentOnAnswer(req, res, next) {
    try {
        const { answerId } = req.params;
        const { text: commentText, userId } = req.body;
        if (!commentText || !userId || !answerId) {
            throw new CustomRequest(
                "Missing any of the required Parameters: answerId(As Params), text(In req.body), userId(In req.body) "
            );
        }
        const commentOnAnswer = await answerService.addCommentOnAnswer(
            answerId,
            userId,
            commentText
        );
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully added comment on answer",
            error: {},
            data: commentOnAnswer,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingAnswerController,
    updateAnswer,
    addCommentOnAnswer,
};
