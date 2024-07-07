const User = require('../models/user.model');

module.exports.createUser = async (request, response) => {
  const { userName, email } = request.body;
  try {
    const user = await User.create({ userName, email });
    response.json(user);
  } catch (err) {
    response.status(500).json({message: 'No se pudo crear el usuario'}); 
    //response.status(500).json(err); 
  }
};

module.exports.getAllUsers = async (_, response) => {
  try {
    const users = await User.findAll();
    response.json(users);
  } catch (err) {
    response.status(500).json(err);
  }
};

module.exports.getUser = async (request, response) => {
  try {
    const user = await User.findOne({ where: { id: request.params.id } });
    response.json(user);
  } catch (err) {
    response.status(500).json(err);
  }
};

module.exports.updateUser = async (request, response) => {
  try {
    // Se actualiza el usuario
    const [updatedRowCount] = await User.update(request.body, {
      where: { id: request.params.id }
    });

    // Se verifica si se ha actualizado algún registro
    if (updatedRowCount) {
      // Recupera la información actualizada del usuario
      const updatedUser = await User.findOne({ where: { id: request.params.id } });
      response.json(updatedUser);
    } else {
      response.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    response.status(500).json(err);
  }
};


module.exports.deleteUser = async (request, response) => {
  try {
    const user = await User.findOne({ where: { id: request.params.id } });
    if (!user) {
      return response.status(404).json({ message: "Usuario no encontrado" });
    }

    await User.destroy({ where: { id: request.params.id } });

    response.json(user);
  } catch (err) {
    response.status(500).json(err);
  }
};

