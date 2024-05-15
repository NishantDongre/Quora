const { Comment } = require("../models");

class CommentRepository {
    async addCommentOnComment(commentId, userId, commentText) {
        try {
            const commentOnComment = await Comment.create({
                parentId: commentId,
                commentOn: "comment",
                userId,
                text: commentText,
            });
            return commentOnComment;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CommentRepository;
