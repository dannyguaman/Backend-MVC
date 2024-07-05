const User = require('../models/user.model');

module.exports.createUser = async (request, response) => {
  const { userName, email } = request.body;
  try {
    const user = await User.create({ userName, email });
    response.json(user);
  } catch (err) {
    response.status(400).json(err);
  }
};

module.exports.getAllUsers = async (_, response) => {
  try {
    const users = await User.findAll();
    response.json(users);
  } catch (err) {
    response.json(err);
  }
};

module.exports.getUser = async (request, response) => {
  try {
    const user = await User.findOne({ where: { id: request.params.id } });
    response.json(user);
  } catch (err) {
    response.json(err);
  }
};

module.exports.updateUser = async (request, response) => {
  try {
    const updatedUser = await User.update(request.body, {
      where: { id: request.params.id },
      returning: true,
      plain: true
    });
    response.json(updatedUser[1]);
  } catch (err) {
    response.json(err);
  }
};

module.exports.deleteUser = async (request, response) => {
  try {
    await User.destroy({ where: { id: request.params.id } });
    response.json({ message: "User deleted" });
  } catch (err) {
    response.json(err);
  }
};
