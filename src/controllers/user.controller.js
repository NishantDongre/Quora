function pingUserController(req, res) {
    res.status(200).json({
        message: "User Router alive",
    });
}

module.exports = {
    pingUserController,
};
