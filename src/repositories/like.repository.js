const CustomRequest = require("../errors/customRequest.error");
const { Like, Question } = require("../models");

class LikeRepository {
    async addLike(entity, entityId, userId) {
        try {
            if (entity === "Question") {
                const question = await Question.find({ _id: entityId });
                if (!question) {
                    throw new CustomRequest(
                        "Question doesn't exist with question ID",
                        entityId
                    );
                }
            } else if (entity === "Answer") {
                const answer = await Answer.find({ _id: entityId });
                if (!answer) {
                    throw new CustomRequest(
                        "Answer doesn't exist with answer ID",
                        entityId
                    );
                }
            } else if (entity === "Comment") {
                const comment = await Comment.find({ _id: entityId });
                if (!comment) {
                    throw new CustomRequest(
                        "Comment doesn't exist with comment ID",
                        entityId
                    );
                }
            }
            const like = Like.create({
                userId,
                entityType: entity,
                likedEntity: entityId,
            });
            return like;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LikeRepository;
