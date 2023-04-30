const { UserPokemons } = require("../models/pokemons");

async function getUserPokemons(req, res, next) {
  const userPokemons = await UserPokemons.find();

  return res.status(200).json(userPokemons);
}

module.exports = {
    getUserPokemons,
};