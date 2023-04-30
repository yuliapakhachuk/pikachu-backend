const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    type: {
      type: String,
    },
    abilities: {
        type: [String],
    },
    level: {
      type: Number,
    },
    evolution: {
        type: [String],
    },

    owners: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userPokemons",
    },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Pokemons = mongoose.model("pokemons", schema);

module.exports = {
    Pokemons,
};
