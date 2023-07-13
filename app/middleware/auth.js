const { UnauthenticatedError } = require("../error");
const { isTokenValid } = require("../utils/jwt");

const authenticatedUser = async (req, res, next) => {
  try {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      throw new UnauthenticatedError("Authentication invalid");
    }

    const payload = isTokenValid({ token });

    req.user = {
      name: payload.name,
      id: payload.id,
      username: payload.username,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  authenticatedUser,
};
