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
}

module.exports = QuestionService;
