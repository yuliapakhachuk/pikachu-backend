const { UserPokemons } = require("../models/userPokemons");
const { Pokemons } = require("../models/pokemons");

const getUserPokemons = async (req, res, next) => {
    const {userId} = req.body.userId;
  const userPokemon = await UserPokemons.find({userId: userId});
  console.log(userPokemon);
  if (!userPokemon) {
    return res.status(400);
    }

  return res.status(200).json(userPokemon);
}

const createNewUserPokemons = async (req, res, next) => {
    const body = req.body;

    const user = await UserPokemons.findOne(body);

    if (user) {
        res.status(200).json(user);
        next();
    }
    const newUser = await UserPokemons.create(body);
    return res.status(201).json(newUser);
  };

  const addUserPokemons = async (req, res, next) => {
    const pokemon = req.pokemonId;

    const myNewPokemonOwner = await Pokemons.findByIdAndUpdate(pokemon, req.body);
    return res.status(200).json({ status: 'success', myNewPokemonOwner });
  };

module.exports = {
    getUserPokemons,
    createNewUserPokemons,
    addUserPokemons
};

