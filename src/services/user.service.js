class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async addUser(userData) {
        const user = await this.userRepository.addUser(userData);
        return user;
    }

    async getUser(userID) {
        const user = await this.userRepository.getUser(userID);
        return user;
    }

    async updateUser(userId, userData) {
        const user = await this.userRepository.updateUser(userId, userData);
        return user;
    }
}

module.exports = UserService;
