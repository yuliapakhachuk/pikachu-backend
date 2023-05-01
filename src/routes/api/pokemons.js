const express = require("express");
const { getPokemons } = require("../../controllers/user/pokemons.controllers");
const { tryCatchWrapper } = require("../../helpers");

const pokemonsRouter = express.Router();

pokemonsRouter.get("/", tryCatchWrapper(getPokemons));

module.exports = {
    pokemonsRouter,
};
