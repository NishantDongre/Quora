class TopicService {
    constructor(topicRepository) {
        this.topicRepository = topicRepository;
    }

    async addTopic(topicData) {
        const newTopic = await this.topicRepository.addTopic(topicData);
        return newTopic;
    }

    async getAllTopics() {
        const topics = await this.topicRepository.getAllTopics();
        return topics;
    }
}

module.exports = TopicService;
