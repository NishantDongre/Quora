const { Answer, Comment } = require("../models");

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

    async addCommentOnAnswer(answerId, userId, commentText) {
        try {
            const commentOnAnswer = await Comment.create({
                parentId: answerId,
                commentOn: "answer",
                userId,
                text: commentText,
            });
            return commentOnAnswer;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AnswerRepository;
