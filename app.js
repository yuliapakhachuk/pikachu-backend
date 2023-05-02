const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const { pokemonsRouter } = require('./src/routes/api/pokemons');
const { userPokemonsRouter } = require('./src/routes/api/userPokemons');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/pokemons', pokemonsRouter);
app.use('/api/userPokemons', userPokemonsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});


module.exports = app;
