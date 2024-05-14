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
}

module.exports = AnswerService;
