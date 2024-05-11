const { StatusCodes } = require("http-status-codes");

const NotImplemented = require("../errors/notImplemented.error");
const { UserService } = require("../services");
const { UserRepository } = require("../repositories");

const userService = new UserService(new UserRepository());

function pingUserController(req, res) {
    res.status(StatusCodes.OK).json({
        message: "User Router alive",
    });
}

async function addUser(req, res, next) {
    try {
        const user = await userService.addUser(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User Created",
            error: {},
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const user = await userService.getUser(req.params.userId);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched a User",
            error: {},
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const user = await userService.updateUser(req.params.userId, req.body);
        res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully updated a User",
            error: {},
            data: user,
        });
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
