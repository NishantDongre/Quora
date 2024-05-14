class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async addQuestion(questionData) {
        const newQuestion = await this.questionRepository.addQuestion(
            questionData
        );
        return newQuestion;
    }

    async getQuestion(searchText, searchTags) {
        const questions = await this.questionRepository.getQuestion(
            searchText,
            searchTags
        );

        return questions;
    }

    async postAnswer(questionId, answerBody) {
        const answer = await this.questionRepository.postAnswer(
            questionId,
            answerBody
        );

        return answer;
    }
}

module.exports = QuestionService;
