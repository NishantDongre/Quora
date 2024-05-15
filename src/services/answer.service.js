class AnswerService {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }

    async updateAnswer(answerId, updateAnswerBody) {
        const updatedAnswer = await this.answerRepository.updateAnswer(
            answerId,
            updateAnswerBody
        );
        return updatedAnswer;
    }

    async addCommentOnAnswer(answerId, userId, commentText) {
        const commentOnAnswer = await this.answerRepository.addCommentOnAnswer(
            answerId,
            userId,
            commentText
        );
        return commentOnAnswer;
    }
}

module.exports = AnswerService;
