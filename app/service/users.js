const User = require("../models").User;
const bcrypt = require("bcryptjs");
const { BadRequestError } = require("../error");

const createUser = async (req, res) => {
  const { name, username, password } = req.body;

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

const getUsers = async (req, res) => {
  const result = await User.findAll();

  return result;
};

module.exports = {
  createUser,
  getUsers,
};
