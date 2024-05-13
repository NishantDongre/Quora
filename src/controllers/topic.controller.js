const { StatusCodes } = require("http-status-codes");

const { TopicService } = require("../services");
const { TopicRepository } = require("../repositories");

const topicService = new TopicService(new TopicRepository());

function pingTopicController(req, res) {
    res.status(StatusCodes.OK).json({
        success: true,
        message: "Topic controller alive",
    });
}

async function addTopic(req, res, next) {
    try {
        const newTopic = await topicService.addTopic(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Topic Created",
            error: {},
            data: newTopic,
        });
    } catch (error) {
        next(error);
    }
}

async function getAllTopics(req, res, next) {
    try {
        const topics = await topicService.getAllTopics();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched the all topics",
            error: {},
            data: topics,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingTopicController,
    addTopic,
    getAllTopics,
};
