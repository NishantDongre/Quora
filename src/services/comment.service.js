class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }

    async addCommentOnComment(commentId, userId, commentText) {
        const commentOnComment =
            await this.commentRepository.addCommentOnComment(
                commentId,
                userId,
                commentText
            );
        return commentOnComment;
    }
}

module.exports = CommentService;
