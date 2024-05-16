class FollowService {
    constructor(followRepository) {
        this.followRepository = followRepository;
    }

    async addFollower(userId, targetUserId) {
        const follow = await this.followRepository.addFollower(
            userId,
            targetUserId
        );
        return follow;
    }
}

module.exports = FollowService;
