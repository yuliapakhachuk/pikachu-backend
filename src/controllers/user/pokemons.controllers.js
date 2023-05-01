const { Pokemons } = require("../../models/pokemons");

async function getPokemons(req, res, next) {
  const pokemons = await Pokemons.find();

  return res.status(200).json(pokemons);
}

module.exports = {
    getPokemons,
};