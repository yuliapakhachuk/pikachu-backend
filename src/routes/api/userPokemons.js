const express = require("express");
const { getUserPokemons, createNewUserPokemons, addUserPokemons } = require("../../controllers/userPokemons.controllers");
const { tryCatchWrapper } = require("../../helpers");

const userPokemonsRouter = express.Router();

userPokemonsRouter.post("/auth", tryCatchWrapper(createNewUserPokemons));
userPokemonsRouter.post("/add", createNewUserPokemons, tryCatchWrapper(addUserPokemons));
userPokemonsRouter.post("/", createNewUserPokemons, tryCatchWrapper(getUserPokemons));



module.exports = {
    userPokemonsRouter,
};
