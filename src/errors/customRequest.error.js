const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class CustomRequest extends BaseError {
    constructor(message) {
        super("CustomException", StatusCodes.PRECONDITION_FAILED, message, {});
    }
}

module.exports = CustomRequest;
