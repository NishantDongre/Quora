const { Topic } = require("../models");

class TopicRepository {
    async addTopic(topicData) {
        const { name } = topicData;
        try {
            const newTopic = Topic.create({
                name,
            });
            return newTopic;
        } catch (error) {
            throw error;
        }
    }

    async getAllTopics() {
        try {
            const topics = await Topic.find({});
            return topics;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TopicRepository;
