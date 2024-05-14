const { Question, Topic, Answer } = require("../models");

const NotFound = require("../errors/notFound.error");

class QuestionRepository {
    async addQuestion(questionData) {
        try {
            const { userId, title, body, topic } = questionData;
            const newQuestion = await Question.create({
                userId,
                title,
                body,
                topic,
            });
            return newQuestion;
        } catch (error) {
            throw error;
        }
    }

    async getQuestion(searchText, searchTags) {
        try {
            // For getting all the questions
            if (searchText === undefined && searchTags === undefined) {
                const allQuestions = await Question.find({});
                return allQuestions;
            }

            let tagIds;
            const topics = await Topic.find({ name: { $in: searchTags } });
            tagIds = topics.map((topic) => topic._id);

            // Constructing the query for the tags
            const tagsQuery = { topic: { $all: tagIds } }; // Match any question that has all of the provided tagIds

            // Executing the query
            const questionsByTags = await Question.find(tagsQuery);

            // return all question only with searched tags
            if (searchText === undefined) return questionsByTags;

            // Constructing the query for the text
            const textQuery = {
                $or: [
                    { title: { $regex: searchText, $options: "i" } }, // Case-insensitive regex match for text in title
                    { body: { $regex: searchText, $options: "i" } }, // Case-insensitive regex match for text in body
                ],
            };

            // Executing the query
            const questionsByText = await Question.find(textQuery);

            // No questions match the searched Tags
            if (questionsByTags.length === 0) return questionsByText;

            // Filter questions that match both text and tags
            const filteredQuestions = questionsByText.filter((question) =>
                questionsByTags.some((q) => q._id.equals(question._id))
            );
            return filteredQuestions;
        } catch (error) {
            throw error;
        }
    }

    async postAnswer(questionId, answerBody) {
        try {
            const { userId, text } = answerBody;
            const answer = await Answer.create({
                questionId,
                userId,
                text,
            });
            return answer;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = QuestionRepository;
