const { StatusCodes } = require("http-status-codes");
const { signIn, signUp } = require("../../service/auth");

const signInUser = async (req, res, next) => {
  try {
    const result = await signIn(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const signUpUser = async (req, res, next) => {
  try {
    const result = await signUp(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { signInUser, signUpUser };
