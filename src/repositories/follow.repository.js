const CustomRequest = require("../errors/customRequest.error");
const { User, Follow } = require("../models");

class FollowRepository {
    async addFollower(userId, targetUserId) {
        try {
            const follower = await User.find({ _id: userId });
            const followingUser = await User.find({ _id: targetUserId });
            if (!follower || !followingUser) {
                throw new CustomRequest(
                    "Either of the User doesn't exist with userId's",
                    userId,
                    targetUserId
                );
            }

            const follow = await Follow.create({
                userId,
                targetUserId,
            });
            return follow;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FollowRepository;
