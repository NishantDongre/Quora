const { StatusCodes } = require("http-status-codes");

const CustomRequest = require("../errors/customRequest.error");
const { QuestionService } = require("../services");
const { QuestionRepository } = require("../repositories");

const questionService = new QuestionService(new QuestionRepository());

function pingQuestionController(req, res) {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Question controller alive",
    });
}

async function addQuestion(req, res, next) {
    try {
        const newQuestion = await questionService.addQuestion(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Question Created",
            error: {},
            data: newQuestion,
        });
    } catch (error) {
        next(error);
    }
}

async function getQuestion(req, res, next) {
    try {
        const searchText = req.query.text;
        const searchTags = req.query.tags?.split(",");

        const question = await questionService.getQuestion(
            searchText,
            searchTags
        );
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the question",
            error: {},
            data: question,
        });
    } catch (error) {
        next(error);
    }
}

async function postAnswer(req, res, next) {
    try {
        const { questionId } = req.params?.questionId;
        const answer = await questionService.postAnswer(questionId, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Succefully posted an answer to the question",
            error: {},
            data: answer,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingQuestionController,
    addQuestion,
    getQuestion,
    postAnswer,
};
