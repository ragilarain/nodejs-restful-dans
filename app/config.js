require("dotenv").config();

module.exports = {
  secret: process.env.SECRET,
  jwtExpiration: process.env.JWTEXPIRATION,
};
