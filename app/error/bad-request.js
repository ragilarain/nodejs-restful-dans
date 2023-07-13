const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    console.log(message);
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
module.exports = BadRequestError;
