const mongoose = require("mongoose");
// Таблиця userPokemons:
// ● userId (адреса гаманця користувача)
// ● pokemonId (ідентифікатор покемона, пов'язаний з користувачем)
// ● addedAt (дата додавання покемона користувачем)
// ● evolvedAt (дата еволюції покемона, якщо відбулась)
const schema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    pokemonId: {
        type: String
    },

    // pokemons: {
    //   type: [{
    //     pokemonId: {type: String},
    //     addedAt: {type: String},
    //     evolvedAt: {type: String},
    // }],
    // },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserPokemons = mongoose.model("userpokemons", schema);

module.exports = {
    UserPokemons,
};
