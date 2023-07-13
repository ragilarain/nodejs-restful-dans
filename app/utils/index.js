const { createTokenUser } = require("./createTokenUser");

const { createJWT, isTokenValid } = require("./jwt");

const constantURL =
  "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";
const constantGetByIdURL =
  "http://dev3.dansmultipro.co.id/api/recruitment/positions/";

module.exports = {
  createJWT,
  createTokenUser,
  isTokenValid,
  constantURL,
  constantGetByIdURL,
};
