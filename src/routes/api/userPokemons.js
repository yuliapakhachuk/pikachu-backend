const express = require("express");
const { getUserPokemons, createNewUserPokemons } = require("../../controllers/userPokemons.controllers");
const { tryCatchWrapper } = require("../../helpers");

const userPokemonsRouter = express.Router();

userPokemonsRouter.get("/", tryCatchWrapper(getUserPokemons));
userPokemonsRouter.post("/", tryCatchWrapper(createNewUserPokemons));


module.exports = {
    userPokemonsRouter,
};
