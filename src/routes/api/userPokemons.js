const express = require("express");
const { getUserPokemons } = require("../../controllers/userPokemons.controllers");
const { tryCatchWrapper } = require("../../helpers");

const userPokemonsRouter = express.Router();

userPokemonsRouter.get("/", tryCatchWrapper(getUserPokemons));

module.exports = {
    userPokemonsRouter,
};
