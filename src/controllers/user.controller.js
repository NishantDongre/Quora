const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notImplemented.error");

function pingUserController(req, res) {
    res.status(StatusCodes.OK).json({
        message: "User Router alive",
    });
}

function addUser(req, res, next) {
    try {
        throw new NotImplemented("Add User");
    } catch (error) {
        next(error);
    }
}

function getUser(req, res, next) {
    try {
        throw new NotImplemented("Get User");
    } catch (error) {
        next(error);
    }
}

function updateUser(req, res, next) {
    try {
        throw new NotImplemented("Update User");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    pingUserController,
    addUser,
    getUser,
    updateUser,
};
