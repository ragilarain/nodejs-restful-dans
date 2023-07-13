const jwt = require("jsonwebtoken");
const { secret, jwtExpiration } = require("../config");

// token
const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: jwtExpiration,
  });
  return token;
};
const isTokenValid = ({ token }) => jwt.verify(token, secret);

// const createRefreshToken = ({ payload }) => {
//     const refreshToken = jwt.sign(payload, jwtRefreshTokenSecretKey, {
//       expiresIn: jwtRefreshTokenExpiration,
//     });
//     return refreshToken;
//   };

// const isTokenValidRefreshToken = ({ token }) =>
//   jwt.verify(token, jwtRefreshTokenSecretKey);

module.exports = {
  createJWT,
  isTokenValid,
  // createRefreshToken,
  // isTokenValidRefreshToken,
};
