const express = require('express');
const { getRandomQuote } = require('./utils.js')
const cors = require('cors')

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send( {
  quote: getRandomQuote()
} );
});

app.listen(PORT, () => {
  console.log('Link to the server');
  console.log(BASE_PATH);
});
