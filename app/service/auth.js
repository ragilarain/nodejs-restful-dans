const User = require("../models").User;
const bcrypt = require("bcryptjs");
const { BadRequestError, UnauthorizedError } = require("../error");
const { createJWT, createTokenUser } = require("../utils");

const signIn = async (req) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError("Harap isi username dan password");
  }

  const result = await User.findOne({ where: { username: username } });
  console.log(result);
  if (!result) {
    throw new UnauthorizedError("invalid Credential");
  }

  const isPasswordCorrect = await comparePassword(password, result.password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedError("invalid Credential");
  }

  const token = createJWT({ payload: createTokenUser(result) });

  return { token: token, name: result.name, username: result.username };
};

const signUp = async (req) => {
  const { name, username, password, confimationPassword } = req.body;

  if (password !== confimationPassword) {
    throw new BadRequestError("Password dan Konfirmasi Password tidak cocok");
  }

  const checkUsername = await User.findOne({ where: { username: username } });

  if (checkUsername) {
    throw new BadRequestError("Username yang didaftarkan sudah terdaftar");
  }

  const result = await User.create({
    name: name,
    username: username,
    password: bcrypt.hashSync(password, 8),
  });

  return result;
};

const comparePassword = async function (candidatePassword, passwordResult) {
  const isMatch = await bcrypt.compare(candidatePassword, passwordResult);
  return isMatch;
};

module.exports = { signIn, signUp };
