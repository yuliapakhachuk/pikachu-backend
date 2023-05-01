const { UserPokemons } = require("../models/userPokemons");

const getUserPokemons = async (req, res, next) => {
  const userPokemon = await UserPokemons.find();
  if (!userPokemon) {
    return res.status(400);
    }

  return res.status(200).json(userPokemon);
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