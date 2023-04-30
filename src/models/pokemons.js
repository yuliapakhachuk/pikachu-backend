const mongoose = require("mongoose");

// {
//     "_id": {
//       "$oid": "644e5542d222e0a854e60ca6"
//     },
//     "name": "Bulbasaur",
//     "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "type": "Grass/Poison",
//     "abilities": [
//       "Overgrow",
//       "Chlorophyll"
//     ],
//     "level": 1,
//     "evolution": [
//       "2"
//     ]
//   }

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
