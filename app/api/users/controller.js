const { createUser, getUsers } = require("../../service/users");

const createCMSUser = async (req, res, next) => {
  console.log("testing");
  try {
    const result = await createUser(req);
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const result = await getUsers(req);
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { createCMSUser, getAllUsers };
