const { User } = require("../models");

class UserRepository {
    async addUser(userData) {
        try {
            const { username, email, bio } = userData;
            const user = User.create({
                username,
                email,
                bio,
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUser(userId) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new NotFound("User", userId);
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userId, userData) {
        try {
            const user = await User.findByIdAndUpdate(userId, userData, {
                new: true,
            });
            if (!user) {
                throw new NotFound("User", userId);
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;
