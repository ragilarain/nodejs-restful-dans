const createTokenUser = (user) => {
  return {
    name: user.name,
    id: user.id,
    username: user.username,
  };
};

module.exports = { createTokenUser };
