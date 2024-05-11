const { StatusCodes } = require("http-status-codes");

function pingUserController(req, res) {
    res.status(StatusCodes.OK).json({
        message: "User Router alive",
    });
}

module.exports = {
    pingUserController,
};
