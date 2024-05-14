const { StatusCodes } = require("http-status-codes");

const { AnswerService } = require("../services");
const { AnswerRepository } = require("../repositories");

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

module.exports = {
    pingAnswerController,
    updateAnswer,
};
