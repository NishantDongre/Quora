class LikeService {
    constructor(likeRepository) {
        this.likeRepository = likeRepository;
    }

    async addLike(entity, entityId, userId) {
        const like = await this.likeRepository.addLike(
            entity,
            entityId,
            userId
        );
        return like;
    }
}

module.exports = LikeService;
