const express = require("express");
const { getPokemons } = require("../../controllers/pokemons.controllers");
const { tryCatchWrapper } = require("../../helpers");

const pokemonsRouter = express.Router();

pokemonsRouter.get("/", tryCatchWrapper(getPokemons));

module.exports = {
    pokemonsRouter,
};
