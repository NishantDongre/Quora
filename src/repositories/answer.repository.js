const { Answer } = require("../models");

class AnswerRepository {
    async updateAnswer(answerId, updateAnswerBody) {
        try {
            const updatedAnswer = await Answer.findByIdAndUpdate(
                answerId,
                updateAnswerBody,
                { new: true }
            );
            return updatedAnswer;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AnswerRepository;
