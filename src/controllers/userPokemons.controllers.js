const { UserPokemons } = require("../models/userPokemons");

const getUserPokemons = async (req, res, next) => {
  const userPokemons = await UserPokemons.find();
  if (!userPokemons) {
    return res.status(400);
    }

  return res.status(200).json(userPokemons);
}

const createNewUserPokemons = async (req, res, next) => {
    const body = req.body;
    const newUser = await UserPokemons.create(body);
    return res.status(201).json(newUser);
  };

module.exports = {
    getUserPokemons,
    createNewUserPokemons
};